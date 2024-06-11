import { useState } from 'react';
import './App.css';

/////////////////////////
//色々な内容設定
/////////////////////////

// 所属の内容
const belongtabs = [
  {
    date: '2024年4月-現在',
    title: '大阪公立大学大学院 情報学研究科 基幹情報学専攻',
    content: '「ピアプレッシャー / ピア効果と通知を活用した学習者の行動変容」について研究を行っています。'
  },
  {
    date: '2020年4月-2024年3月',
    title: '大阪電気通信大学 工学部 電子機械工学科',
    content: '「畳み込みニューラルネットワークを使用したドローンの自律飛行」について研究を行っていました。'
  },
  {
    date: '2017年4月-2020年3月',
    title: '私立四條畷学園高等学校',
    content: '高等学校では茶道部に所属しており、「茶道 表千家 習事/入門/飾物/茶通箱」を取得しました。'
  },
];

// 経験の内容
const worktabs = [
  {
    date: '2021年8月-現在',
    title: 'ユニバーサルスタジオジャパン',
    content: 'アトラクションやショーの運営を行っています。'
  },
];

// Hobbyの内容
const hobbytabs = [
  {
    images: ['./img/trip1.jpg', './img/trip2.jpg', './img/trip3.jpg', './img/trip4.jpg', './img/trip5.jpg'],
    title: 'トラベル',
    content: ['まだ行ったことがない場所に行くのが好きで、できるだけ長期休暇には出かけるようにしています！',
    '',
    '⚪︎旅行先',
    '北海道',
    '関東（東京・横浜・千葉）',
    '関西（京都、兵庫）',
    '中国（鳥取、岡山、広島）',
    '九州（福岡・長崎・大分・熊本）',
    '海外（ハワイ・グアム・バリ島）',
    '',
    'とあるモノが流行してからは制限がかかったり、円安になって海外は難しくなりました...',],
    thumbnail: './img/trip1.jpg'
  },
  {
    images: ['./img/food2.jpg', './img/food3.jpg', './img/food4.jpg', './img/food1.jpg'],
    title: '食べ歩き',
    content: ['普段は週に1回ほど梅田などで美味しそうなお店に入っています。',
      '',
      '学生なので外食はお財布には優しくないですが、美味しい物には抗えません！',
      '',
      '',
      '',
      '⚪︎好きな食べ物',
      '肉料理や魚料理、野菜...',
      '基本なんでも好きです。'],
    thumbnail: './img/food2.jpg'
  },
  {
    images: ['./img/park1.jpg', './img/park2.jpg', './img/park3.jpg', './img/park4.jpg', './img/park5.jpg', './img/park6.jpg'],
    title: 'テーマパーク',
    content: ['やはりアルバイトをしているだけあって、テーマパークは好きです。',
      '特に関東にある方が大好きです！',
      '40周年の時には、ほとんど毎シーズン行きました！',
      '',
      '僕はディズニーランド派です。',
    ],
    thumbnail: './img/park1.jpg'
  },
  {
    images: ['./img/ga1.png', './img/ga2.png'],
    title: 'ゲーム制作',
    content: ['約1年前に「やまねこ連合」というゲーム制作サークルを立ち上げました。',
      '',
      'そこでは色々な苦労がありましたが、最近になってプロジェクトが動きました！',
      'チーム内ではプログラミングを担当しています。'],
    thumbnail: './img/ga1.png'
  }
];

// Workの内容
const workstabs = [
  {
    images: ['./img/web1.png', './img/web2.png'],
    title: 'Webサイト制作',
    content: ['このWebサイトのことです！',
      '一目見てわかりやすいデザインを心がけました！',
      'レスポンシブ対応にも挑戦したので、ぜひパソコンからでも幅を変えてみてください。',
      '大学2年生の授業で少しふれた程度でしたが、実際に作ってみると達成感があり楽しいです！',
      '',
      '⚪︎使用したツール',
      'JavaScript(React),CSS(Tailwind CSS)'],
    thumbnail: './img/web1.png'
  },
  {
    images: ['./img/jo1.png', './img/jo2.png', './img/jo3.png', './img/jo4.png', './img/jo5.png'],
    title: 'ジョージのほろよいメーター',
    content: ['2024年6月8日～9日に行ったハッカソンで制作した作品です。',
      'こちらは骨格検出を行い、予め設定したポーズがちゃんととれているかをジョージが判断するアプリです。',
      '開発人数は5人で、僕はバックエンドで骨格検出を行いポーズがちゃんととれているかを判別するプログラムを担当しました。',
      '',
      '⚪︎使用したツール',
      'JavaScript,Python(React),CSS(Tailwind CSS)',],
    thumbnail: './img/jo1.png'
  },
  {
    images: ['./img/so1.jpg', './img/so2.png', './img/so3.jpg'],
    title: '畳み込みニューラルネットワークを使用したドローンの自律飛行',
    content: ['大学の卒業研究で制作しました。',
      '機械学習の方法などの知識が全くない状態から制作しました。',
      '始めは2人で「決定木」を使用した自律飛行を行っていましたが、精度を上げるために変更しました。',
      '',
      '⚪︎使用したツール',
      'Python（PyCharm）'],
    thumbnail: './img/so1.jpg'
  },
  {
    images: ['./img/ga1.png', './img/ga2.png'],
    title: '弾幕ゲーム',
    content: ['現在サークルで制作しているゲームです。',
      'まだまだ途中ですが、プログラミングの方はキャラクターに画像に変更、',
      'また物語り部分の制作を行いたいと思っています。',
      '',
      '⚪︎使用したツール',
      'C++（Unreal Engine）'],
    thumbnail: './img/ga1.png'
  }
];
const ImageTab = ({ image, title, onClick }) => {
  // マウスがタブに乗っているかどうかを管理するためのuseState
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      // isHoveredの状態に応じて枠の色を変更するようにクラスを設定
      className={`image-tab border-2 p-2 cursor-pointer text-center ${isHovered ? 'border-gray-500' : 'border-gray-400'}`}
      onMouseEnter={() => setIsHovered(true)} // マウスが乗ったときにisHoveredをtrueに設定
      onMouseLeave={() => setIsHovered(false)} // マウスが離れたときにisHoveredをfalseに設定
      onClick={onClick}
    >
      <img src={image} alt="house" className="tab-image w-full object-cover" />
      <p className="mt-2">{title}</p>
    </div>
  );
};



const Modal = ({ images, title, content, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex-1">
          <img src={images[currentIndex]} alt="house" />
          <div className="flex justify-between mt-2">
            <button onClick={handlePrev}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
        <div className="description flex-1 p-4">
          <h2 className="text-center">{title}</h2>
          <hr className="my-4 border-gray-300" />
          {content.map((line, index) => (
            <p key={index}>{line === "" ? "\u00A0" : line}</p>
          ))}
        </div>
        <div className="close-button" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

/////////////////////////
//メイン関数
/////////////////////////

function App() {
    // タブの状態を管理するためのuseState
    const [activeBelongTab, setActiveBelongTab] = useState(null);
    const [activeWorkTab, setActiveWorkTab] = useState(null);
    const [selectedHobbyTab, setSelectedHobbyTab] = useState(null);

    const handleHobbyTabClick = (hobbytab) => {
      setSelectedHobbyTab(hobbytab);
    };
    const handleHobbyCloseModal = () => {
      setSelectedHobbyTab(null);
    };

    const [selectedWorksTab, setSelectedWorksTab] = useState(null);
    const handleWorksTabClick = (workstab) => {
      setSelectedWorksTab(workstab);
    };
    const handleWorksCloseModal = () => {
      setSelectedWorksTab(null);
    };
  return (
  <>

{/*
/////////////////////////
//ヘッダーの設定
/////////////////////////
*/}
   <header className="text-gray-700 border-b border-gray-200 sticky top-0 bg-white z-10">
    <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
      <a href="#home" className='font-medium text-gray-900 mb-4 md:mb-0'>
        <span className='text-4xl ml-3'>Portfolio</span>
      </a>
      <nav className='md:ml-auto text-base'>
        <a href="#home" className='mr-8 hover:text-gray-500 hover:border-2 hover:border-gray-400 duration-300 text-lg md:text-3xl'>Home</a>
        <a href="#Profile" className='mr-8 hover:text-gray-500 hover:border-2 hover:border-gray-400 duration-300 text-lg md:text-3xl'>Profile</a>
        <a href="#Hobby" className='mr-8 hover:text-gray-500 hover:border-2 hover:border-gray-400 duration-300 text-lg md:text-3xl'>Hobby</a>
        <a href="#Works" className='hover:text-gray-500 hover:border-2 hover:border-gray-400 duration-300 text-lg md:text-3xl'>Works</a>
      </nav>
    </div>
   </header>

{/*
/////////////////////////
//Homeの設定
/////////////////////////
*/}

   <section className='text-gray-700' id='home'>
    <div className="container mx-auto px-4 py-11">
    {/* コンテンツの開始位置をヘッダーの高さ分下げる*/}
    <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
      <div className='md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
          Sugimoto Kaito
        </h1>
        <p className='mb-8 leading-relaxed text-xl text-gray-900'>2001年10月27日生まれ。大阪生まれ大阪育ちです！<br/>大阪公立大学院 知能メディア処理研究室に所属しています。</p>
      </div>
      <div className='md:w-1/2 lg:max-w-lg w-5/6'>
        <img src='./img/No.jpg' alt='' style={{ borderRadius: '10px' }}/>
      </div>
    </div>
    </div>
   </section>

{/*
/////////////////////////
//profileの設定
/////////////////////////
*/}

  <section className='text-gray-700 border-t border-gray-200'id='Profile'>
    <div className="container mx-auto px-4 py-8">
      {/* コンテンツの開始位置をヘッダーの高さ分下げる*/}
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>Profile</h1>
          <h2 className='text-left text-xl sm:text-3xl font-medium mb-2 text-gray-900'>所属</h2>
        </div>

      <div className="container mx-auto px-4">
      <div className="flex border-b border-gray-200"></div>
      <div className="mt-4">
        {belongtabs.map((tab, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer"
              onClick={() => setActiveBelongTab(activeBelongTab === index ? null : index)}
            >
              <div className="flex items-center justify-start flex-grow">
                <div className="text-teal-500 font-bold">{tab.date}</div>
              </div>
              <div className="text-gray-800 flex items-center justify-end flex-grow">
                {tab.title}
                {activeBelongTab === index ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z"
                      fill="currentColor"
                    />
                    <path d="M16.3432 19V5H18.3432V19H16.3432Z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M5 7.41421L6.41421 6L12.0711 11.6569L17.7279 6L19.1421 7.41421L12.0711 14.4853L5 7.41421Z"
                      fill="currentColor"
                    />
                    <path d="M19 16.3432H5V18.3432H19V16.3432Z" fill="currentColor" />
                  </svg>
                )}
              </div>
            </div>
            {activeBelongTab === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className='text-center mb-20'>
      <h2 className='text-left text-xl sm:text-3xl font-medium mb-2 text-gray-900'>経験</h2>
    </div>
    
    <div className="container mx-auto px-4">
      <div className="flex border-b border-gray-200"></div>
      <div className="mt-4">
        {worktabs.map((tab, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer"
              onClick={() => setActiveWorkTab(activeWorkTab === index ? null : index)}
            >
              <div className="flex items-center justify-start flex-grow">
                <div className="text-teal-500 font-bold">{tab.date}</div>
              </div>
              <div className="text-gray-800">{tab.title}</div>
              {activeWorkTab === index ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z"
                    fill="currentColor"
                  />
                  <path d="M16.3432 19V5H18.3432V19H16.3432Z" fill="currentColor" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.41421L6.41421 6L12.0711 11.6569L17.7279 6L19.1421 7.41421L12.0711 14.4853L5 7.41421Z"
                    fill="currentColor"
                  />
                  <path d="M19 16.3432H5V18.3432H19V16.3432Z" fill="currentColor" />
                </svg>
              )}
            </div>
            {activeWorkTab === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
  </section>

{/*
/////////////////////////
//Hobbyの設定
/////////////////////////
*/}

   <section className='text-gray-700 border-t border-gray-200' id='Hobby'>
   <div className="container mx-auto px-4 py-8">
    {/* コンテンツの開始位置をヘッダーの高さ分下げる*/}
   <div className='container px-5 py-24 mx-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>Hobby</h1>
      </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hobbytabs.map((hobbytab, index) => (
                  <ImageTab
                    key={index}
                    image={hobbytab.thumbnail}
                    title={hobbytab.title}
                    onClick={() => handleHobbyTabClick(hobbytab)}
                  />
                ))}
              </div>
              {selectedHobbyTab && (
                <Modal
                  images={selectedHobbyTab.images}
                  title={selectedHobbyTab.title}
                  content={selectedHobbyTab.content}
                  onClose={handleHobbyCloseModal}
                />
              )}
            </div>

      </div>
    </div>
   </section>

{/*
/////////////////////////
//Worksの設定
/////////////////////////
*/}

   <section className='text-gray-700 border-t border-gray-200' id='Works'>
   <div className="container mx-auto px-4 py-8">
    {/* コンテンツの開始位置をヘッダーの高さ分下げる*/}
   <div className='container px-5 py-24 mx-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>Works</h1>
      </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workstabs.map((workstab, index) => (
                  <ImageTab
                    key={index}
                    image={workstab.thumbnail}
                    title={workstab.title}
                    onClick={() => handleWorksTabClick(workstab)}
                  />
                ))}
              </div>
              {selectedWorksTab && (
                <Modal
                  images={selectedWorksTab.images}
                  title={selectedWorksTab.title}
                  content={selectedWorksTab.content}
                  onClose={handleWorksCloseModal}
                />
              )}
            </div>

      </div>
    </div>
   </section>


   <div className="app-container">
      {/* ここに他のコンポーネントやコンテンツを追加 */}
      <footer className="footer">
        <p>2024 Kaito Sugimoto's Portfolio</p>
      </footer>
    </div>

  </>
  );
}

export default App;