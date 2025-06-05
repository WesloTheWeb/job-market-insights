import { navigationHeaderConfig } from "../../config";
import classes from './Header.module.scss'

const { navigationHeaderContainer } = classes;

const Header = ({ }) => {
    return (
        <header className={navigationHeaderContainer}>
            <h1>Job Insights</h1>
            <nav>
                {
                    navigationHeaderConfig.map(({ navigationName, path }) => {
                        return (
                            <>
                                <a href={path}>{navigationName}</a>
                            </>
                        )
                    })}
            </nav>
        </header>
    );
};

export default Header;