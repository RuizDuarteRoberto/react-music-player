import { v4 as uuidv4 } from 'uuid'

function chillHop() {
  return [
    {
      name: 'Lose Her Way',
      artist: 'C Y G N',
      cover:
        'https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg',
      id: uuidv4(),
      active: true,
      color: ['#3EA253', '#2F612C'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=31589',
    },
    {
      name: 'Canção',
      artist: 'The BREED',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#566AAB', '#392D84'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7961',
    },
  ]
}

export default chillHop
