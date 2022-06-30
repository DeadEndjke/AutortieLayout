import a from './Block.module.css'
import LeftBlock from './LeftBlock/LeftBlock';


const Block = () => {
    return (
        <div className={a.block}>
            <div className={a.blockcontainer}>
                <div className={a.scientists}>
                    <div className={a.blockitems}>
                        <div className={a.leftblock}>
                            <LeftBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Block;