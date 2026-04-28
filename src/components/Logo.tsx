import { Copy } from "lucide-react";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({ size = 36, showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon - Copy icon with gradient background */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.28,
          background: "linear-gradient(90deg, #d7ac38 0%, #ed3334 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Copy size={size * 0.50} color="white" strokeWidth={2.5} />
      </div>

      {/* Logo Text */}
      {showText && (
        <span
          className="font-display text-white"
          style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px" }}
        >
          Tx Tech
        </span>
      )}
    </div>
  );
}
