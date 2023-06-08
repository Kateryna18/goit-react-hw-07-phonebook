import css from 'components/Error/Error.module.css';

export function Error() {

    return (
        <div className={css.errorCard}>
            <img className={css.img}
            src="https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg" 
                 alt="error" />
            <p>Sorry, something went wrong. Try again later!</p>
        </div>
    )
}