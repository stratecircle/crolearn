import { forwardRef, useRef } from "react";

const HR_CHARS = ["č", "ć", "đ", "š", "ž"] as const;

/**
 * Text input with on-screen Croatian diacritic keys (always available — §2).
 * Insertion respects the caret position.
 */
const AnswerInput = forwardRef<
  HTMLInputElement,
  {
    value: string;
    onChange: (v: string) => void;
    onSubmit: () => void;
    placeholder?: string;
    disabled?: boolean;
    autoFocus?: boolean;
  }
>(function AnswerInput({ value, onChange, onSubmit, placeholder, disabled, autoFocus }, outerRef) {
  const innerRef = useRef<HTMLInputElement | null>(null);

  const setRefs = (el: HTMLInputElement | null) => {
    innerRef.current = el;
    if (typeof outerRef === "function") outerRef(el);
    else if (outerRef) outerRef.current = el;
  };

  const insert = (ch: string) => {
    const el = innerRef.current;
    if (!el) return onChange(value + ch);
    const start = el.selectionStart ?? value.length;
    const end = el.selectionEnd ?? value.length;
    const next = value.slice(0, start) + ch + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + 1, start + 1);
    });
  };

  return (
    <div>
      <input
        ref={setRefs}
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value.trim()) onSubmit();
        }}
        className="w-full rounded-xl border bg-white px-5 py-3.5 text-lg text-[#16243D] outline-none transition-colors duration-150 focus:border-[#16243D] disabled:bg-[#F7F4F0]"
        style={{ borderColor: "rgba(15,23,42,.14)" }}
      />
      <div className="mt-2.5 flex gap-2">
        {HR_CHARS.map((ch) => (
          <button
            key={ch}
            type="button"
            tabIndex={-1}
            disabled={disabled}
            onClick={() => insert(ch)}
            className="rounded-xl border bg-white px-3.5 py-1.5 text-lg font-semibold text-[#16243D] transition-colors duration-150 hover:bg-[#F7F4F0] disabled:opacity-40"
            style={{ borderColor: "rgba(15,23,42,.1)" }}
          >
            {ch}
          </button>
        ))}
      </div>
    </div>
  );
});

export default AnswerInput;
