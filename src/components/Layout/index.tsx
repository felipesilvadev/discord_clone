import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';
import ChannelInfo from '../ChannelInfo';
import UserInfo from '../UserInfo';
import ChannelData from '../ChannelData';
import UserList from '../UserList';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelList />
      <ChannelInfo />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  )
}

export default Layout;