import { CSSProperties } from 'react';
import { IOption } from '../common/Common.type';

interface ISelectBox {
   option: IOption[];
   styles: CSSProperties;
}

export const SelectBox: React.FC<ISelectBox> = (props) => {
   return (
      <select style={props.styles}>
         {props.option?.map((option: IOption) => (
            <option key={option.key} value={option.value}>{option.value}</option>
         ))}
      </select>
   );
};
