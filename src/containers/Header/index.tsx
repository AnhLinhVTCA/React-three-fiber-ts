import React, { FC } from 'react';

import StyledWrapper from './styles';

type Props = {
  name?: string;
};

const HeaderContainer: FC<Props> = () => {
  return <StyledWrapper>Header</StyledWrapper>;
};

export default HeaderContainer;
