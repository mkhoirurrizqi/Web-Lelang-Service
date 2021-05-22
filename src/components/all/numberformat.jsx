import NumberFormat from 'react-number-format';

export function ReactNumberFormat({ value }) {
    return (
      <NumberFormat
        value={value}
        displayType={'text'}
        thousandSeparator={'.'} 
        decimalSeparator={','}
        prefix={'Rp. '}
        renderText={formattedValue => <label>{formattedValue}</label>} 
      />
    );
  }