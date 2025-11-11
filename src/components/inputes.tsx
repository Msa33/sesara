// Champs.tsx

type ChampsProps = {
  type: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  label?: string;
  
};

function Champs(props: ChampsProps) {
  return (
    
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={props.className}
          onChange={props.onChange}
          value={props.value}
        />
    
  );
}

export default Champs;
