import { defineConfig, loadEnv, type Connect } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sendEmailHandler from "./api/send-email";

const localApiMiddleware = (): Connect.NextHandleFunction => (req, res, next) => {
  if (req.url !== "/api/send-email") {
    return next();
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let rawBody = "";
  req.on("data", (chunk) => {
    rawBody += chunk;
  });
  req.on("end", async () => {
    try {
      const request = req as typeof req & { body?: unknown };
      request.body = rawBody ? JSON.parse(rawBody) : {};
      await sendEmailHandler(request, {
        status: (statusCode: number) => {
          res.statusCode = statusCode;
          return {
            json: (payload: unknown) => {
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(payload));
            },
          };
        },
      });
    } catch {
      if (!res.writableEnded) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Failed to send email" }));
      }
    }
  });
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env.RESEND_API_KEY ??= env.RESEND_API_KEY;

  return {
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "development" && {
      name: "local-api",
      configureServer(server: { middlewares: { use: (middleware: Connect.NextHandleFunction) => void } }) {
        server.middlewares.use(localApiMiddleware());
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "@tanstack/react-query"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-query"],
  },
  };
});
