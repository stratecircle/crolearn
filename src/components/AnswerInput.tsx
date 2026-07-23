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
        className="w-full rounded-xl border-2 border-stone-300 bg-white px-4 py-3 text-lg outline-none focus:border-stone-900 disabled:bg-stone-100"
      />
      <div className="mt-2 flex gap-1.5">
        {HR_CHARS.map((ch) => (
          <button
            key={ch}
            type="button"
            tabIndex={-1}
            disabled={disabled}
            onClick={() => insert(ch)}
            className="rounded-lg bg-stone-200 px-3 py-1.5 text-lg font-semibold hover:bg-stone-300 disabled:opacity-40"
          >
            {ch}
          </button>
        ))}
      </div>
    </div>
  );
});

export default AnswerInput;
