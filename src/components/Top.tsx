import { css } from '@emotion/react';
import LogoSvg from '../../public/images/sp_logo.svg';
import SearchStation from './SearchStation';

export const Top: React.FC = () => {
   return (
      <div
         css={css`
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
         `}
      >
         <LogoSvg width={200} height={50} />
         <SearchStation />
      </div>
   );
};
