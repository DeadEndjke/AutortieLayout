import a from './Community.module.css'
import CommunityCard from './CommunityCard/CommunityCard';

const Community = () => {
    return (
        <div className={a.communitycontainer}>
            <div className={a.community}>
                <h1 className={a.title}>Сообщество</h1>
                <p className={a.paragraph}>Тысячи учёных уже предлагают свою помощь</p>
                <div className={a.communitycards}>
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                </div>
                <div className={a.communitycards}>
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                </div>


                <div className={a.communitycardsvivible1}>
                    <CommunityCard />
                    <CommunityCard />
                </div>
                <div className={a.communitycardsvivible1}>
                    <CommunityCard />
                    <CommunityCard />
                </div>

                <div className={a.communitycardsvivible2}>
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                </div>

                <button className={a.lastbtn}>смотреть все</button>

            </div>
        </div>
    );
}

export default Community;