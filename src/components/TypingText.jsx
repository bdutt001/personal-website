import './typing-text.css';

export default function TypingText({ text }) {
  return (
    <span className="typing run" style={{ "--chars": text.length }}>
      {text}
    </span>
  )
}