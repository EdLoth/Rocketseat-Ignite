import styles from './App.module.css';
import { Sidebar, Header, Post, PostType } from './components';

import './global.css';



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/EdLoth.png',
      name: 'Eduardo Ramos',
      role: 'Desenvolvedor Full-Stack'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},

    ],
    publishedAt: new Date('2023-05-26 21:48:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},

    ],
    publishedAt: new Date('2023-05-26 21:48:30'),
  },
];


function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {
          posts.map(post => {
            return (
              <Post 
              key={post.id} 
              post={post}
              
              />
            )
          })}

        </main>
      </div>
    </>
  )
}

export default App
