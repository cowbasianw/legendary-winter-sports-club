import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/Logo1.jpg';
import YinQi from '../assets/images/bios/QinYin.jpg';
import Winner from '../assets/images/bios/Winner.png';
import Cindy from '../assets/images/bios/Cindy.jpg';
import Cassidy from '../assets/images/bios/cassidy.jpg';
import Daria from '../assets/images/bios/Daria.jpg';
import Rachel from '../assets/images/bios/Rachel.png';
import SkaterRacheal from '../assets/images/bios/RachealBio.jpg';
import Robyn from '../assets/images/bios/robyn.JPG';
import Josh from '../assets/images/bios/Josh2.JPG';
import Nicole from '../assets/images/bios/Nicole.JPG';
import Joy from '../assets/images/bios/Joy.jpg';
import SkaterQi from '../assets/images/bios/SkaterQi.png';
import { useLanguage } from '../context/LanguageContext.jsx';


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const linkStyle = {
        cursor: 'pointer',
        color: 'orange',
    };

    const hoverStyle = {
        textDecoration: 'underline',
        color: 'darkblue',
    };

    const { language } = useLanguage();

    const images = {
        HeadCoach: [YinQi, Winner, SkaterQi],
        Racheal: [SkaterRacheal, Rachel],
    };

    const [currentIndexes, setCurrentIndexes] = useState({
        HeadCoach: 0,
        Racheal: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexes(prev => ({
                HeadCoach: (prev.HeadCoach + 1) % images.HeadCoach.length,
                Racheal: (prev.Racheal + 1) % images.Racheal.length,
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, [images.HeadCoach.length, images.Racheal.length]);

    const bios = [
        {
            name: language === 'EN' ? 'Head Coach - Qi Yin' : '主教练 - 殷琦',
            text: language === 'EN' ? (
                <>
                    <p>
                        Meet our Head Coach Qi Yin — an elite speed and short track skating athlete and coach.
                        She graduated from Harbin Sport University, majoring in Sports Training.
                        <br /><br />
                        Qi represented Team China in major international competitions, including the
                        <strong> 2022 Beijing Winter Olympics</strong>, and earned medals at the
                        <strong> 2025 Asian Winter Games</strong> and
                        <strong> 2024 National Winter Games</strong>.
                        <br /><br />
                        <strong>Highlights:</strong><br />
                        • 2025 World Championships (Norway): 5th in Team Sprint, 7th in 1000m<br />
                        • 2025 Asian Winter Games (Harbin): Silver in 1000m, Bronze in 1500m<br />
                        • 2024 National Winter Games (Hailar): Gold in 1000m, Silver in Mass Start & 1500m, Bronze in Team Pursuit<br />
                        • Short Track World Silver Medalist & Multiple National Champion
                        <br /><br />
                        Coach Yin brings over 21 years of skating experience and now leads our training programs at Legendary Winter Sports Club.
                        <br /><br />
                        Learn more on Baidu Baike and{' '}
                        <a
                            className="text-base md:text-1xl lg:text-2xl"
                            href="https://en.wikipedia.org/wiki/Yin_Qi_(speed_skater)"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                            onMouseEnter={(e) => e.target.style.color = hoverStyle.color}
                            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                        >
                            Wikipedia
                        </a>.
                    </p>
                </>
            ) : (
                <>
                    <p>殷琦 — 一位经验丰富的速度与短道速滑运动员兼教练，现任传琦冬季运动俱乐部主教练。</p>
                    <p>她毕业于哈尔滨体育学院运动训练专业，代表中国队参加多个国际大赛，成绩卓越。</p>
                    <p>
                        <strong>主要成就：</strong><br />
                        • <strong>2025年世界锦标赛（挪威）：</strong>团体追逐第5名，1000米第7名<br />
                        • <strong>2025年第九届亚洲冬季运动会（哈尔滨）：</strong>1000米亚军，1500米季军<br />
                        • <strong>2024年第十四届全国冬季运动会（海拉尔）：</strong>1000米冠军，集体出发亚军，1500米亚军，团体追逐季军<br />
                        • <strong>短道速滑世界亚军</strong>， 多次全国冠军
                        <br /><br />
                        殷教练拥有超过21年的滑冰经验，致力于培养新一代速度与短道速滑人才。
                    </p>
                    <div>
                        更多资料请查看百度百科及{' '}
                        <a
                            className="text-base md:text-1xl lg:text-2xl"
                            href="https://en.wikipedia.org/wiki/Yin_Qi_(speed_skater)"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                            onMouseEnter={(e) => e.target.style.color = hoverStyle.color}
                            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                        >
                            Wikipedia
                        </a>。
                    </div>
                </>
            ),
            img: images.HeadCoach[currentIndexes.HeadCoach],
            alt: 'YinQi'
        },
        {
            name: language === 'EN' ? 'Coach Lead - Rachel Mallard' : '领导教练 - Rachel Mallard',
            text: language === 'EN' ? (
                <>
                    <p>Rachel Mallard is a long track speed skater from Ottawa</p>
                    <p>
                        before moving to Calgary to train at the Olympic Oval in the Elite Athlete Pathway, and to study neuroscience
                        at the University of Calgary.
                        <br /><br />
                        She is now a Stage 3 athlete in her third year with the program, and is specializing in middle and long distance races.
                        Over the last two years with the program, Rachel has been a medalist at the Canadian junior championships and the Canada Winter Games,
                        and is now working towards improving her Canadian ranking as a senior skater.
                        <br /><br />
                        Working with Legendary Winter Sports has been an incredible opportunity to enhance her coaching skills,
                        work with motivated athletes, and hopefully pass on her love for the sport to the next generation!
                    </p>
                </>
            ) : (
                <>
                    <p>
                        Rachel Mallard是来自安大略省渥太华的长道速滑运动员。她在渥太华训练了十年后，搬到卡尔加里在精英运动员发展计划中训练，并在卡尔加里大学学习神经科学。
                        她目前是该项目的第三阶段运动员，已经在该项目中训练了三年，专攻中长距离比赛。
                        <br /> <br />
                        在过去的两年里，Rachel 在加拿大青少年锦标赛和加拿大冬季运动会上获得了奖牌，
                        现在她正致力于提高她作为成年运动员的加拿大排名。与传琦冬季运动俱乐部合作是一个令人难以置信的机会，可以提升她的教练技能，与有动力的运动员合作，
                        并希望将她对这项运动的热爱传递给下一代！
                    </p>
                </>
            ),
            img: images.Racheal[currentIndexes.Racheal],
            alt: 'Rachel'
        },
        {
            name: language === 'EN' ? 'Assistant Coach - Joshua Hathaway' : '助理教练 - Joshua Hathaway',
            text: language === 'EN' ? (
                <>
                    <p>
                        Josh is a dedicated Long Track Speed Skater who began his journey in Medicine Hat, Alberta, before relocating to Calgary at just 15 years old to join the prestigious Olympic Oval Elite Athlete Program. Now a Stage 3 athlete, Josh is entering his 11th season training at the Oval.
                        Specializing in the 5,000m and 10,000m distances, Josh has earned multiple accolades over the course of his career, including:

                    </p> <br /> <br />
                    <p>
                        <strong>World Cup Calgary 2019:</strong> Selected as Team Canada Alternate for the 5,000m
                        <br />
                        <strong>2019 Canada Winter Games:</strong> Bronze medalist in the 5,000m and gold medalist in the men’s four-man Team Pursuit, where his team set a Canada Winter Games record that still stands today
                        <br />

                        <strong>2019 Canadian Junior Champion</strong> – 5,000m
                        <br />

                        <strong>World Cup Calgary 2019:</strong> Selected as Team Canada Alternate for the 5,000m
                        <br />

                        <strong> Olympic Season 2021–2022:</strong> Served as a training partner with Team Canada
                        <br />

                        <strong>2024–2025 Canada Cup:</strong> Ranked 4th nationally in the 5,000m

                    </p>
                    <br /><br />
                    <p>
                        Alongside his competitive pursuits, Josh is deeply committed to the sport through coaching and mentorship.
                        He draws from his extensive experience to support and inspire the next generation of skaters, contributing
                        meaningfully to the long track community both on and off the ice.

                    </p>
                </>
            ) : (
                <>
                    <p>
                        Joshua Hathaway —— 曾代表加拿大出征世界杯，在 2019 年加拿大冬季运动会上勇夺 一金一铜，并创造至今仍保持的团队追逐赛纪录！
                        在 2024–2025 赛季 Canada Cup 中，5000 米项目全国排名 第 4！他是一名现役长道速滑运动员，来自加拿大艾伯塔省，15 岁便加入享有盛誉的
                        奥林匹克椭圆精英运动员计划，目前已在椭圆速滑中心训练 11 个赛季，专攻 5000 米和 10000 米 长距离项目。
                        <br />
                        <br />
                        主要荣誉：
                    </p>
                    <p>
                        <strong>2019 年卡尔加里世界杯</strong> 入选加拿大国家队 5000 米替补
                        <br />

                        <strong>2019 年加拿大冬季运动会：</strong> 5000 米铜牌 & 四人团队追逐赛金牌（创造加拿大冬运会纪录）
                        <br />

                        <strong>2019 年加拿大青年锦标赛：</strong> – 5000 米冠军
                        <br />

                        <strong>2021–2022 奥运赛季:</strong> 担任加拿大国家队训练伙伴
                        <br />

                        <strong> 2024–2025 加拿大杯：</strong> 5000 米全国排名第 4
                        <br />


                        除了竞技生涯，Josh 拥有多年一线执教经验，热衷于指导和培养下一代运动员。
                        他将正式加入 传琦俱乐部，担任 教练兼器材师，把他的顶尖经验带到我们的冰场！

                    </p>
                </>
            ),
            img: Josh,
            alt: 'Josh'
        },
        {
            name: language === 'EN' ? 'Assistant Coach - Daria Vogt' : '助理教练 - Daria Vogt',
            text: language === 'EN' ? (
                <>
                    <p>
                        Daria Vogt is from Ottawa, Ontario and have been speed skating for about 14 years.
                        This is her third-year training with the Olympic Oval in long track speed skating,
                        also her third year studying Exercise and Health Physiology at the University of Calgary!
                        <br /> <br />
                        Daria is our level 1 Kick Start Assistant Coach, she has rich experience in sports camp with children,
                        very patient and good with kids who never Skate before.
                        She is very excited to share her knowledge and to give back to the skating community!
                    </p>
                </>
            ) : (
                <>
                    <p>
                        达莉亚·沃特（Daria Vogt）来自安大略省渥太华，她已经从事速滑大约14年了。
                        这是她在奥林匹克椭圆形冰场进行长道速滑训练的第三年，也是她在卡尔加里大学学习运动与健康生理学的第三年！
                        <br /><br />
                        达莉亚是我们的一级启动助理教练，她在儿童体育营中拥有丰富的经验，对从未滑冰过的孩子非常有耐心并且很擅长与他们相处。
                        她非常兴奋能够分享她的知识，并回馈滑冰社区！
                    </p>
                </>
            ),
            img: Daria,
            alt: 'Daria'
        },
        {
            name: language === 'EN' ? 'Assistant Coach - Robyn Salie' : '助理教练 - Robyn Salie',
            text: language === 'EN' ? (
                <>
                    <p>
                        Robyn Salie is originally from Winnipeg, Manitoba, and moved to Calgary in 2022 after graduating high school to pursue long track speed skating.
                        She is currently working in retail and coaching, with her primary focus on training at the Olympic Oval.
                    </p> <br /> <br />
                    <p>
                        Robyn began coaching at Legendary Winter Sports Club in November 2024 and has been loving the experience ever since.
                        Witnessing the skaters' growth and enthusiasm for the sport fuels her passion to continue working with young athletes and helping them improve.
                    </p>
                </>
            ) : (
                <>
                    <p>
                        Robyn Salie 是传琦冬季运动俱乐部的一名助理教练，教授一级初学者速滑。她拥有多年的滑冰经验和全面的速滑知识，致力于为传琦俱乐部的所有学生提供正确的速滑教育和卓越的体验。
                        <br /> <br />
                        她曾担任领导角色，拥有与儿童一起工作的经验和教学经验，以及在体育环境中的工作背景，这使她成为一名耐心且敬业的助理教练。
                    </p>
                </>
            ),

            img: Robyn,
            alt: 'Robyn'
        },
        {
            name: language === 'EN' ? 'Club Assistant - Nicole Law' : '助理教练 - Nicole Law',
            text: language === 'EN' ? (
                <>
                    <p>
                        Nicole Law is a short track speed skater from Hong Kong. Before moving to Canada,
                        she was an inline speed skater for 12 years. Now she trains at the Olympic Oval in the Elite Pathway Program and is studying kinesiology
                        at the University of Calgary. She is a stage 2 athlete in her third year with the program and skates for Team Hong Kong.
                    </p>
                    <br /> <br />
                    <p>
                        Over the last 2 years, Nicole has represented Hong Kong in international competitions such as Junior World Cup and Junior World Championships in 2024,
                        finishing 8th and 7th place respectively in the mixed relay. Gold medalist in the mixed relay at the Asian Open 2024.
                        As well as competing at FISU World University Games Torino 2025.
                        And competing in both short track and long track at Asian Winter Games Harbin 2025.
                    </p>
                    <br /> <br />
                    <p>
                        Nicole looks forward to sharing her experience and inspiring the next generation.
                        She is passionate about promoting winter sports, especially encouraging young athletes to pursue their dreams with resilience and confidence.
                        Nicole hopes to demonstrate the value of hard work, adaptability, and perseverance both on and off the ice.
                    </p>
                </>
            ) : (
                <>
                    <p>
                        Nicole是一位来自香港的短道速滑运动员。移居加拿大之前，她曾练了速度轮滑12年。
                        目前，她在奥林匹克椭圆形冰场精英运动员发展计划中训练，并在卡尔加里大学攻读运动机能学。
                        她是该计划的二期运动员，今年是第三年。她也是中国香港短道速滑队的成员。
                        <br /> <br />
                        在过去的两年里，Nicole代表香港参加了多项国际赛事，例如2024年青少年世界杯和青少年世界锦标赛，
                        并在混合接力赛中分别获得第八名和第七名。她还是2024年亚洲公开赛混合接力赛的金牌得主。
                        2025年，她参加了2025都灵国际大学生体育联合会（FISU）世界大学生运动会，并在2025哈尔滨亚冬会上同时参加了短道和大道项目的比赛。
                        <br /> <br />
                        Nicole很期待分享她的经验，激励下一代。她热衷于推广冬季运动，尤其鼓励年轻运动员以坚韧和自信的态度追寻梦想。
                        Nicole希望在冰上和陆地训练展现勤奋、适应能力和坚毅的精神。

                    </p>
                </>
            ),

            img: Nicole,
            alt: 'Nicole'
        },

        {
            name: language === 'EN' ? 'Club Assistant - Joy Zhang' : '助理教练 - Joy Zhang',
            text: language === 'EN' ? (
                <>
                    <p>
                        Joy is a Club Assistant at Legendary Winter Sports, teaching level one beginner speed skaters.
                        Offering several years of previous skating experience and a comprehensive knowledge of speed skating,
                        Joy is committed to providing proper speed skating education and an exemplary experience for all students at Legendary.
                    </p> <br /> <br />
                    <p>
                        She has previous experience in leadership roles, working with children, and teaching,
                        as well as a background working in athletic environments, making her a patient and dedicated assistant coach.
                    </p>
                </>
            ) : (
                <>
                    <p>
                        Joy是传琦冬季运动俱乐部的一名助理教练，教授一级初学者速滑。她拥有多年的滑冰经验和全面的速滑知识，致力于为传琦俱乐部的所有学生提供正确的速滑教育和卓越的体验。
                        <br /> <br />
                        她曾担任领导角色，拥有与儿童一起工作的经验和教学经验，以及在体育环境中的工作背景，这使她成为一名耐心且敬业的助理教练。
                    </p>
                </>
            ),
            img: Joy,
            alt: 'Joy'
        },

        {
            name: language === 'EN' ? 'Head Manager - Cindy Luo' : '主管经理 - Cindy Luo',
            text: language === 'EN' ? (
                <>
                    <p>Cindy graduated with a Master of Education from the University of Calgary,</p>
                    <p>
                        Bachelor’s degree in Art Education from Minzu University of China. She has been dedicated to youth
                        arts and sports education, people development, and training for many years, with over 10 years
                        of experience in team management and operations.
                        <br /><br />
                    </p>
                    <p>As the Team Leader of the China National Champion Overseas Team,</p>
                    <p>
                        Cindy hopes to lead the Legendary Team in inspiring more children to enjoy winter sports and to help them realize their potential for the next generation.
                        All the coaches and staff members of the Legendary Team are committed to being stepping stones for children on their journey to legend.
                    </p>
                </>
            ) : (
                <>
                    <p>Cindy毕业于卡尔加里大学教育学研究生院</p>
                    <p>
                        ， 本科毕业于中央民族大学艺术教育学。 多年来致力于青少年文体教育，
                        人员发展及培训等，有10余年的团队管理和运营经验。作为全国冠军海外团队领队，
                        Cindy希望能带领传琦团队让更多的孩子们喜欢上冰雪运动，开发出下一代孩子们更多的潜力。
                        传琦全体教职员工愿成为孩子走上传琦之路上的一块垫脚石。
                    </p>
                </>
            ),
            img: Cindy,
            alt: 'Cindy'
        },
        {
            name: language === 'EN' ? 'Operation Manager - Cassidy Wen' : '运营部经理 - Cassidy Wen',
            text: language === 'EN' ? (
                <>
                    <p>
                        Cassidy graduated from the Haskayne School of Business at the University of Calgary
                        with a degree in Accounting and she is one of the co-founders of an independent brand.
                        <br /><br />
                        She has over two years of experience in team management and marketing strategies, effectively driving team goals and business growth.
                        Since middle school, Cassidy has been actively involved in various leadership and entrepreneurial projects.
                        <br /><br />
                        As the Operations Manager for the China National Champion Overseas Team,
                        Cassidy aims to use her expertise in promotion and operational strategies to inspire more children to take up and enjoy ice skating, unlocking their unlimited potential!
                    </p>
                </>
            ) : (
                <>
                    <p>
                        Cassidy毕业于卡尔加里大学Haskayne School of Business-会计专业，也是一个独立品牌的创办人之一。
                        她拥有超过两年的团队和营销策略经验，能够有效地推动团队目标和业务增长。从初中开始，Cassidy就积极参与各种领导力和创业项目。
                        <br /> <br />
                        作为全国冠军海外团队的运营部经理，
                        Cassidy希望通过她的专业技能和在宣传及运营策略方面的才能，激励更多孩子们加入并热爱滑冰这项运动，释放他们的无限潜力。
                    </p>
                </>
            ),
            img: Cassidy,
            alt: 'Cassidy'
        }
    ];

    return (
        <div className="text-center p-10 mt-28">
            <div className="flex flex-col md:flex-row text-left px-1 md:px-16 py-8">
                <div className="w-full lg:w-2/3 p-8 bg-opacity-75 text-black">
                    <div className="text-left">
                        <span className="w-full text-center text-lg md:text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full">
                            {language === 'EN' ? 'Legendary Winter Sports Club' : '传琦冰雪俱乐部'}
                        </span>
                        <div className="mt-8 text-sm md:text-1xl lg:text-2xl">
                            {language === 'EN' ? (
                                <>
                                    <p>The mission of Legendary Winter Sports Club is to inspire the next generation of children aged 4-17 with the joy and beauty of skating. Based in Calgary, Alberta, our club is home to an incredible community of passionate skaters and dedicated coaches.</p>
                                    <p>We are committed to providing students with the highest quality training and fostering their passion for skating. Through our dedicated efforts, we hope to see these children compete in Alberta's speed skating competitions, national competitions showcasing their talents and passion for the sport.</p>
                                    <p>Our ultimate goal is to support the development of future Canadian speed skaters, contributing to the national team by producing more outstanding athletes. We are committed to excellence and hope to become a significant contributor to the growth and success of speed skating in Canada.</p>
                                </>
                            ) : (
                                <>
                                    <p>传琦冰雪俱乐部的使命是激发4-17岁的儿童和青少年对滑冰的热爱。</p>
                                    <p>传琦冰雪俱乐部致力于为学生提供最高质量的训练，并培养和激发他们对滑冰的热情。我们期待看到孩子们通过他们自身的努力在阿尔伯塔省的速度滑冰比赛和全国比赛中充分展示他们的最高水平和对滑冰的热爱。</p>
                                    <p>我们的终极目标是促进加拿大速滑运动的发展，同时为国家队培养后续中坚力量；并持续输出更多优秀运动员。我们致力于成为加拿大速度滑冰的重要贡献者。</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3 lg:w-1/3 flex items-center justify-center">
                    <img src={logo1} alt="Encouragement" className="w-72 h-72 object-cover rounded-lg" />
                </div>
            </div>

            <div className="relative bg-opacity-75 text-center text-black py-8 flex-grow">
                <span className="w-full lg:w-3/4 text-lg md:text-2xl lg:text-5xl font-bold bg-white text-orange-600 p-4 block rounded-full mx-auto text-center">
                    {language === 'EN' ? 'Meet our Coaches!' : '认识一下我们的教练'}
                </span><br /><br />

                {bios.map(({ name, text, img, alt }, index) => (
                    <div key={index} className="flex flex-col lg:flex-row text-left lg:text-left mb-8 md:mb-0 md:px-8 md:py-8">
                        <div className="md:w-1/2 lg:w-1/4 custom-lg:w-1/3 custom-lg:h-2/3 flex items-center justify-center">
                            <img src={img} alt={alt} className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="lg:w-3/4 custom-lg:w-2/3 flex py-6 md:px-6 md:py-6 lg:px-12 flex flex-col items-center md:items-start text-left">

                            <span className="text-lg md:text-2xl lg:text-4xl font-bold text-orange-600 py-6">
                                {name}
                            </span><br /><br />
                            <span className="text-sm md:text-1xl lg:text-2xl">
                                {text}
                            </span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
