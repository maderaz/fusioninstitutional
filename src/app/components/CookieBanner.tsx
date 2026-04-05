import { useState, useEffect, useCallback } from "react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import { X } from "lucide-react";

const STORAGE_KEY = "cookie_consent";

export function useCookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = sessionStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }, []);

  const decline = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }, []);

  const reopen = useCallback(() => {
    setVisible(true);
  }, []);

  return { visible, accept, decline, reopen };
}

export function CookieBanner({
  visible,
  onAccept,
  onDecline,
}: {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}) {
  const { isDark } = useTheme();

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-2.5rem)] rounded-xl border p-5 shadow-xl backdrop-blur-sm",
        isDark
          ? "border-[#2E3137] bg-[#161A20]/95 text-[#9BA3AF]"
          : "border-[#E5E5E5] bg-white/95 text-[#70747A]"
      )}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mb-1 flex items-center justify-between">
        <p
          className={cn("text-[13px]", isDark ? "text-white" : "text-[#000000]")}
          style={{ fontWeight: 500 }}
        >
          Cookie Preferences
        </p>
        <button
          onClick={onDecline}
          className={cn(
            "rounded p-0.5 transition-colors",
            isDark ? "text-[#9BA3AF] hover:text-white" : "text-[#70747A] hover:text-[#000000]"
          )}
        >
          <X className="size-3.5" />
        </button>
      </div>
      <p className="mb-4 text-[12px] leading-[1.6]">
        We use cookies to improve your experience and analyze site traffic. By accepting, you consent
        to our use of cookies.
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={onAccept}
          className="flex-1 rounded-lg px-4 py-2 text-[12px] text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(90deg, #8429FF, #6C00FF)",
            fontWeight: 500,
          }}
        >
          Accept
        </button>
        <button
          onClick={onDecline}
          className={cn(
            "flex-1 rounded-lg border px-4 py-2 text-[12px] transition-colors",
            isDark
              ? "border-[#2E3137] text-[#9BA3AF] hover:border-[#45484D] hover:text-white"
              : "border-[#E5E5E5] text-[#70747A] hover:border-[#9BA3AF] hover:text-[#000000]"
          )}
          style={{ fontWeight: 500 }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
