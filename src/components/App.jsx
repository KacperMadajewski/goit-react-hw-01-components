import { Profile } from './profile/profile';
import user from './profile/user.json';
import { Statistics } from './statistics/statistics';
import data from './statistics/data.json';
import { FriendList } from './friendsList/friendList';
import friends from './friendsList/friends.json';
import { TransactionHistory } from './transaction/transactionHistory';
import history from './transaction/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Title'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={history} />
    </div>
  );
};
