import React from 'react';
import './switcher.css';

interface SwitcherProps {
  /** Текст переключателя */
  label: string;
  /** Состояние свитчера вкл/выкл */
  isOn: boolean;
  /** Состояние свитчера вкл/выкл */
  handleToggle: () => void;
}

/**
 * Компонент Switcher
 */
export const Switcher = ({ label, isOn, handleToggle }: SwitcherProps): React.ReactElement => (
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="switchCheckLabel"
      checked={isOn}
      onChange={handleToggle}
    />
    <label className="form-check-label" htmlFor="switchCheckLabel">
      <span className="form-check-label-text">{label}</span>
    </label>
  </div>
);
