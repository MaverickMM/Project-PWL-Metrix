import React, { useState } from 'react';
import '../public/styles/global.css';
import Header from '../components/Header';
import styles from './Discover.module.css';
import Dropdown from './Dropdown';

const MusicDiscoveryPage: React.FC = () => {
   const [selectedRegion, setSelectedRegion] = useState<string>('');

   const handleRegionSelect = (region: string) => {
     setSelectedRegion(region);
   };

   return (
     <div>
        <Header />
        <Dropdown onSelect={handleRegionSelect} />
        {selectedRegion && (
        <p>Selected Region: {selectedRegion}</p>)}
        
        <div className={styles.discover1}>
        <div className={styles.content}>
            <div className={styles.top}>
            <div className={styles.theMostTrending}>
                The most trending tracks in Indonesia this week
            </div>
            <div className={styles.topnavIconButtonParent}>
                <div className={styles.topnavIconButton}>
                <div className={styles.icon}>
                    <img className={styles.iconArrowLeft}
                    alt=""
                    src="/Images/Icon-Arrow-Left.svg"
                    />
                </div>
                </div>
                <div className={styles.topnavIconButton1}>
                <div className={styles.icon}>
                    <img className={styles.iconArrowLeft}
                    alt=""
                    src="/Images/Icon-Arrow-Left.svg"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <div className={styles.containerCard}>
                <img 
                    className={styles.imageThumbIcon}
                    alt=""
                    src="/Images/As The World Caves In.jpg"
                />
                </div>
                <div className={styles.contentCard}>
                <a
                    className={styles.titleThumb}
                    href="https://music.apple.com/id/album/as-the-world-caves-in/1578612434?i=1578612440"
                    target="_blank"> As the World Caves In
                </a>
                <div className={styles.authorThumb}>
                    Sarah Cothran</div>
                <div className={styles.labelThumb} />
                </div>
            </div>
            <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/(It Goes Like) Nanana.jpg"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <a
                        className={styles.titleThumb}
                        href="https://music.apple.com/id/album/it-goes-like-nanana-edit/1689088940?i=1689088958"
                        target="_blank">
                        (It Goes Like) Nanana (Edit)
                    </a>
                    <div className={styles.authorThumb}>
                        Peggy Gou</div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/Jiwa yang Bersedih.jpg"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Jiwa Yang Bersedih</div>
                    <div className={styles.authorThumb}>
                        Ghea Indrawari</div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/Tatto.png"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Tattoo</div>
                    <div className={styles.authorThumb}>
                        Loreen</div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/Satu-Satu.jpg"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Satu-Satu</div>
                    <div className={styles.authorThumb}>
                        Idgitaf</div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/Moonlight.png"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Moonlight</div>
                    <div className={styles.authorThumb}>
                        Kali Uchis</div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/Somebody's Pleasure.jpg"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Somebody's Pleasure</div>
                    <div className={styles.authorThumb}>
                        Aziz Hedra</div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/Rayuan Perempuan Gila.jpg"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Rayuan Perempuan Gila</div>
                    <div className={styles.authorThumb}>
                        Nadin Amizah</div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="Images/Popular.jpg"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Popular (feat. Playboi Carti) </div>
                    <div className={styles.authorThumb}> 
                        The Weeknd & Madonna </div>
                    <div className={styles.labelThumb} />
                    </div>
                </div>
                <div className={styles.thumbnail}>
                    <div className={styles.containerCard}>
                    <img
                        className={styles.imageThumbIcon}
                        alt=""
                        src="/Images/Paint the Town Red.jpg"
                    />
                    </div>
                    <div className={styles.contentCard}>
                    <div className={styles.titleThumb}>
                        Paint The Town Red </div>
                    <div className={styles.authorThumb}>
                        Doja Cat </div>
                    <div className={styles.labelThumb}/>
                    </div>
                </div>

        </div>
        <div className={styles.footer}>
        <div className={styles.copyrightContainer}>
            <p className={styles.copyright}>Copyright 2023 Metrix</p>
            <p className={styles.copyright}>&nbsp;</p>
            <p className={styles.copyright}>Maverick Mikolas Mulyadi</p>
            <p className={styles.copyright}>Edith Felicia Putri</p>
            <p className={styles.copyright}>Beatrix Stefany</p>
        </div>
        </div>
        </div>
    );
};
export default MusicDiscoveryPage;


