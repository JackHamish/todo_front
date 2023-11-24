const Icon = (props: { icon?: string; className?: string }) => {
  return <i className={`${props.icon} ${props.className}`} />;
};

export default Icon;
