import { css } from '@emotion/react';
import { stationLines } from './common/Common.data';
import { SelectBox } from './controls/SelectBox';

const SearchStation: React.FC = () => {
   return (
      <div
         css={css`
            display: flex;
            width: 500px;
            padding: 10px;
            align-items: center;
         `}
      >
         <SelectBox
            option={stationLines}
            styles={{ width: '100px', height: '50px', fontSize: '15px', textAlign: 'center', border: '2px solid', borderRadius: 4 }}
         />
         <input style={{ width: '100%', height: '50px', marginLeft: 10, border: '2px solid', borderRadius: 4, fontSize: 20 }} />
         <button style={{ width: '100px', height: '50px', marginLeft: 10, borderRadius: 4 }}>검색</button>
      </div>
   );
};

export default SearchStation;
