import styles from "../styles/tooltip.module.css";

type TooltipProps = { text: string };

export default function Tooltip(props: TooltipProps) {
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipText}>{props.text}</p>
    </div>
  );
}
