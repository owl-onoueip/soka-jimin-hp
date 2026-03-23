import { useEffect, useState } from 'react';
import './AnimatedSlideText.css';

interface AnimatedSlideTextProps {
  title: string;
  content: string;
  icon?: string;
  animationType?: 'pulse' | 'glow' | 'bounce' | 'wave' | 'typewriter';
  isActive: boolean;
}

export function AnimatedSlideText({
  title,
  content,
  icon,
  animationType = 'pulse',
  isActive,
}: AnimatedSlideTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypewriting, setIsTypewriting] = useState(false);

  // タイプライター効果
  useEffect(() => {
    if (animationType === 'typewriter' && isActive) {
      setIsTypewriting(true);
      setDisplayedText('');
      let index = 0;
      const interval = setInterval(() => {
        if (index < content.length) {
          setDisplayedText(content.substring(0, index + 1));
          index++;
        } else {
          setIsTypewriting(false);
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      setDisplayedText(content);
    }
  }, [isActive, content, animationType]);

  return (
    <div className={`animated-slide-text animated-${animationType}`}>
      {icon && (
        <div className="slide-icon" style={{ animation: isActive ? `${animationType} 0.6s ease-in-out` : 'none' }}>
          {icon}
        </div>
      )}

      <h2
        className="slide-title"
        style={{
          animation: isActive ? `${animationType} 0.8s ease-in-out 0.1s forwards` : 'none',
          opacity: isActive ? 1 : 0,
        }}
      >
        {title}
      </h2>

      <p
        className="slide-content"
        style={{
          animation: isActive ? `${animationType} 0.8s ease-in-out 0.2s forwards` : 'none',
          opacity: isActive ? 1 : 0,
        }}
      >
        {animationType === 'typewriter' ? displayedText : content}
        {isTypewriting && <span className="typewriter-cursor">|</span>}
      </p>

      {/* 生きているような効果を出すための装飾要素 */}
      {isActive && animationType !== 'typewriter' && (
        <>
          <div className="animated-underline" />
          <div className="animated-accent" />
        </>
      )}
    </div>
  );
}
