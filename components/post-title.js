import styles from '../styles/blog.module.css'

export default functionPostTitle({post}) {
  return (
    <div className={styles.postInfo}>
    <h1>{post.title}</h1>
    </div>
  )
}
