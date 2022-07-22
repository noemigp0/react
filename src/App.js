import './App.css'
import CustomButton from './components/button/index'
import List from './components/list/index'

import users from './assets/mock_users' //Mock data de los usuarios ( array )

function App () {
  console.log(users)
  const testUser = [
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Milja',
        last: 'Wuori'
      },
      dob: {
        date: '1986-10-10T10:21:11.034Z',
        age: 35
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/55.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/55.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/55.jpg'
      }
    }
  ]
  return (
    <div className='App'>
      <List data={users} />
      <List data={testUser} />
    </div>
  )
}

export default App