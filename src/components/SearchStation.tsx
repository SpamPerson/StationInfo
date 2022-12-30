import { css } from '@emotion/react';
import { IOption } from './common/Common.type';
import { SearchBox } from './controls/SearchBox';
import { SelectBox } from './controls/SelectBox';

const SearchStation: React.FC = () => {
   const linStation: IOption[] = [
      { key: '1', value: '1호선' },
      { key: '2', value: '2호선' },
      { key: '3', value: '3호선' },
      { key: '4', value: '4호선' },
      { key: '5', value: '5호선' },
      { key: '6', value: '6호선' },
      { key: '7', value: '7호선' },
      { key: '8', value: '8호선' },
      { key: '9', value: '9호선' },
   ];
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
            option={linStation}
            styles={{ width: '100px', height: '50px', fontSize: '15px', textAlign: 'center', border: '2px solid', borderRadius: 4 }}
         />
         <SearchBox styles={{ width: '100%', height: '50px', marginLeft: 10, border: '2px solid', borderRadius: 4, fontSize: 20 }} />
         <button style={{ width: '100px', height: '50px', marginLeft: 10, borderRadius: 4 }}>검색</button>
      </div>
   );
};

export default SearchStation;
