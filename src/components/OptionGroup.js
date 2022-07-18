export default function OptionGroup({ chave, valores }) {
  return (
    <optgroup id={chave} label={chave}>
      {valores.map((valor) => (
        <option value={valor}>{valor.toString()}</option>
      ))}
    </optgroup>
  );
}
