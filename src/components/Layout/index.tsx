import React, { FC } from 'react';

import StyledWrapper from './styles';

type Props = {
  name?: string;
};

export const Layout: FC<Props> = () => <StyledWrapper>Layout component</StyledWrapper>;
