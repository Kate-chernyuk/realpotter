import styles from '../styles/blog.module.css'

export default function Article({children}) {
  return(
    <div className={styes.article}>
        {children}
    </div>
   )
}
