import styles from '../styles/blog.module.css'

export default functionPostTitle({post}) {
  return (
    <>
    <div className={styles.posInfo}>
    <h1>{post.title}</h1>
    </div>
    </>
  )
}
