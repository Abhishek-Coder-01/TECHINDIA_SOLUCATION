import logoGlyph from "@/assets/techindia-mark.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { glyph: "w-7 h-7", text: "text-base font-bold" },
  md: { glyph: "w-9 h-9", text: "text-lg sm:text-[20px] font-bold" },
  lg: { glyph: "w-11 h-11", text: "text-xl sm:text-2xl font-extrabold" },
};

export function Logo({ size = "md", className = "" }: LogoProps) {
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        <img src={logoGlyph} alt="TECHINDIA Solutions" className={`${s.glyph} object-contain`} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display tracking-tight text-foreground ${s.text}`}>
          TECHINDIA <span className="text-primary">SOLUTIONS</span>
        </span>
      </div>
    </span>
  );
}
