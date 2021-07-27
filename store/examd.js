export const state = () => ({
    session: 0,
    number: 0,
    count: 0,
    back_bool: true,
    next_bool: false,
    load_bool: true,
    que_ans: [],
    check: [],
    resultItems: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],
    ans: [
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""]
    ],
    que: [
      [{
        que: "null問題",
        ans: "ア"
      }],
      [
        {
            que: "利益を上げ、健全な経営の下で半永久的に企業を存続すること",
            ans: "ア"
        },
        {
            que: "Plan:計画,Do:実行,Check:点検,Act:処置",
            ans: "イ"
        },
        {
            que: "Corporate Social Responsibility。企業が社会情勢や市民・地域などからのさまざまな要請に対して果たすべき責任",
            ans: "ウ"
        },
        {
            que: "企業理念に基づいて立案されて企業の目標(経営目標)を達成するために、企業活動が円滑に進むように企業全体を管理すること",
            ans: "エ"
        }
      ],
      [
        {
          que: "筋道を建てた論理的な思考能力",
          ans: "ア"
        },
        {
          que: "自動車産業とモビリティの将来的動向を示すキーワード。C(Connected:コネクテッド),A(Autonomous:自動運転),S(Shared & Service:シェアリング/サービス),E(Electric:電動化)",
          ans: "イ"
        },
        {
          que: "環境、社会、ガバナンス。この三つから企業の事業活動を分析し評価する考え方",
          ans: "ウ"
        },
        {
          que: "Sustainable Development Goals(持続可能な開発目標)とは、持続可能な世界を実現するため、2030年までに達成する国際的な開発目標のこと。具体的には、17のゴールと169のターゲットから構成されている",
          ans: "エ"
        },
        {
          que: "会社法、法人税法、証券取引法に準拠して行われる会計",
          ans: "オ"
        },
        {
          que: "経営者の意思決定に用いられる情報を提供・管理するために行われる",
          ans: "カ"
        },
      ],
      [
        {
          que: "人間の頭脳労働によって想像された知的生産物のすべてに対する財産権",
          ans: "ア"
        },
        {
          que: "知的財産権の一つ。著作物を創作した著作者の権利",
          ans: "イ"
        },
        {
          que: "知的財産権の一つ。小発明ともいうべき「考案」を保護する権利",
          ans: "ウ"
        },
        {
          que: "電気通信回路(ネットワークなど)を通じて行われる犯罪を防止し、コンピュータへのアクセス制限によって、電気通信の安全および秩序を維持することを目的とした法律",
          ans: "エ"
        },
        {
          que: "個人情報の保護とバランスを取ることを目的とした、個人情報を取り扱う個人情報取扱事業者が遵守すべき義務などを規定した法律",
          ans: "オ"
        },
        {
          que: "個人情報の取扱いについて、適切な保護体制を整備している団体等に対し、プライバシーマークを付与する制度",
          ans: "カ"
        },
        {
          que: "自社以外の事業者に業務を委託する場合など、委託した業務を通じて知りえた自社の営業秘密を開示しないことを約束させるために締結する契約",
          ans: "キ"
        },
      ],
      [
        {
          que: "企業理念(経営理念)に基づいて、企業の経営目標を達成するために立案する戦略",
          ans: "ア"
        },
        {
          que: "経営戦略の中で最上位に位置し、企業がそれまでの方向性を見直し、新たな企業活動に取り組む戦略",
          ans: "イ"
        },
        {
          que: "顧客満足度のこと",
          ans: "ウ"
        },
        {
          que: "従業員満足度のこと",
          ans: "エ"
        },
        {
          que: "自社の 内部要因 を強み(Strength),弱み(Weakness), 外部要因 を機会(Opportunity),脅威(Threat)に分け事業戦略を明らかにする手法",
          ans: "オ"
        },
        {
          que: "経営戦略およびマーケティング戦略に基づき策定される、業務レベルの具体的な戦略",
          ans: "カ"
        },
        {
          que: "経営の最適かと効率化を図ることを目的としたシステム",
          ans: "キ"
        },
        {
          que: "企業の基幹業務(会計・経理・財務/人事・給与/営業/物流等)を支えるシステム",
          ans: "ク"
        },
      ],
      [
        {
          que: "企業の基幹系業務以外を支えるシステム",
          ans: "ア"
        },
        {
          que: "電子商取引のこと",
          ans: "イ"
        },
        {
          que:  "家電製品や工業製品等を制御するシステム",
          ans:  "ウ",
        },
        {
          que:  "あらゆるモノをインターネット(あるいはネットワーク)に接続する技術であり、日本語ではモノのインターネットと訳される",
          ans:  "エ",
        },
        {
          que:  "企業経営において、「情報システムをどのように活用して経営戦略・事業戦略を効果的に進めるか」という、情報システムを構築するための指針・方針である。",
          ans:  "オ",
        },
        {
          que:  "企業が競争優位性構築を目標に、IT戦略の策定・実行をコントロールし、あるべき方向へ導く組織能力",
          ans:  "カ",
        },
        {
          que:  "BA(ビジネスアーキテクチャ),DA(データアーキテクチャ),AA(アプリケーションアーキテクチャ),TA(テクノロジーアーキテクチャ)",
          ans:  "キ",
        },
      ],
      [
        {
          que:"業務上の問題解決・課題解決の仕組み(ソリューション)を提供するサービス",
          ans:"ア"
        },
        {
        
          que:"情報システムの企画・構築から情報システムの運用管理までを一括して請け負うビジネス形態" ,
          ans:"イ"
        },
        {
          que:"SaaS(Software as a Service), PaaS(Platform as a Service), IaaS(Infrastructure as a Service)",
          ans:"ウ",
        },
        {
          que:"前者は、技術者がシステムを動かすための仕様を定義したもの。「〇〇であるべき」「〇〇が必要」という表現になる。後者は、非技術者が、システムに求める仕様を定義したもの。「〇〇したい」「〇〇になること」という表現になります",
          ans:"エ",
        },
        {
          que:"業務用件、機能要件、非機能要件(信頼性、効率性などの品質特性、システム構成・性能などの技術特性、運用・操作特性など)",
          ans:"オ",
        },
      ],
      [
        {
          que:"Aのこと",
          ans:"ア",
          image:"/2021EXAM/6-1.png",
          img:"true",
        },
        {
          que:"Bのこと",
          ans:"イ",
          image:"/2021EXAM/6-1.png",
          img:"true",
        },
        {
          que:"Cのこと",
          ans:"ウ",
          image:"/2021EXAM/6-1.png",
          img:"true",
        },
      ]
    ],
    select: [
        [
          "選択肢は出ないはずだよ"
        ],
        [
            "企業活動の目的",
            "PDCAサイクル",
            "CSR(企業の社会的責任)",
            "経営管理"
        ],
        [
            "ロジカルシンキング",
            "CASE",
            "ESG",
            "SDGs",
            "財務会計",
            "管理会計"
        ],
        [
            "知的財産権",
            "著作権",
            "実用新案権",
            "不正アクセス禁止法",
            "個人情報保護法",
            "プライバシーマーク制度",
            "守秘義務(NDA)"
        ],
        [
            "経営戦略",
            "経営革新",
            "CS(Customer Satisfaction)",
            "ES(Employes Satisfaction)",
            "SWOT分析",
            "ビジネス戦略",
            "経営管理システム",
            "基幹系(または勘定系)システム"
        ],
        [
            "情報系システム",
            "EC(Electronic Commerce)",
            "組込みシステム",
            "IoT(Internet of Things)",
            "情報システム戦略(情報戦略)",
            "ITガバナンス",
            "EA(エンタープライズアーキテクチャ)"
        ],
        [
          "ソリューションビジネス",
          "システムインテグレーション",
          "クラウドサービス",
          "要件定義と要求定義",
          "要件定義に明記する３つの要件"
        ],
        [
          "情報システム戦略",
          "開発技術",
          "プロジェクトマネジメント"
        ],
    ],
    items: ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ'],
  })
  
  export const getters = {
    count: state => {
      return state.count
    },
    ans: state => {
      return state.ans[state.session][state.number]
    },
  
    back_bool: state => {
      return state.back_bool
    },
    next_bool: state => {
      return state.next_bool
    },
    que: state => {
      return state.que
    },
    number: state => {
      return state.number
    },
    select: state => {
      return state.select
    },
    items: state => {
      return state.items
    },
    session: state => {
      return state.session
    },
    resultItems: state => {
      return state.resultItems[state.session]
    }
  }
  export const actions = ({
    // clearAns(state){
    //   state.number = 0
    //   state.ans[state.session] = ""
    //   console.log("clear")
    // },
  })
  
  export const mutations = ({
    clearAns(state){
      state.number = 0
      state.ans[state.session] = [""]
    },
    checkAns: function (state) {
      state.number = 0
      state.count = 0
      for (let i = 0; i < state.que[state.session].length; i++) {
        if (state.que[state.session][i].ans == state.ans[state.session][i]) {
          state.count++
          state.check[i] = "〇"
        } else {
          state.check[i] = "×"
        }
      }
    },
    queshuffle(state){
      var session = state.session
      var i = state.que[session].length
      // console.log("i : "+ i)
      while(--i){
        // console.log("i -> " + i)
        var j = Math.floor(Math.random() * ( i + 1)); //2,0,3,0,2,0
        // console.log(j)
  
  
        if(state.que[session][i].ans == state.que[session][j].ans){
          // console.log(state.que[session][i].ans + state.que[session][j].ans)
          // console.log("conti:"+i+ "j:" +j + "now continue stop")
          continue
        }else{
          // console.log("conti:"+i+ "j:" +j)
          var k = state.que[session][j]
          // console.log(k)
          state.que[session][j] = state.que[session][i]
          state.que[session][i] = k 
          // console.log("state.que[session]" + state.que[session][i].que)
        }
      }
      // console.log(state.que[state.session])
      // console.log("Shuffle conpleat")
    },
    getAns(state, value) {
      state.ans[state.session][state.number] = value
    },
  
    boolcheck(state) {
      const nums = (Number(state.que[state.session].length) - 2)
      // console.log("state.number : " + state.number + " state.que[state.session].length : " + state.que[state.session].length)
      if (state.number == 0) {
        state.back_bool = true
        state.next_bool = false
      } else if (1 <= state.number && state.number < state.que[state.session].length - 1) {
        state.back_bool = false
        state.next_bool = false
      } else if (Number(state.number) > nums) {
        state.back_bool = false
        state.next_bool = true
      }
    },
    numberClear(state){
      state.number = 0
    },
    back(state) {
      state.number--
    },
    next(state) {
      state.number++
    },
    changepage(state, index) {
      state.session = index
    },
    selectorGetter(state) {
      state.items = state.items.slice(0, state.select[state.session].length);
    },
    setitem(state) {
      var userans = []
      var ansers = []
      function getAns(){
        for(let i = 0;i < state.select[state.session].length; i++)
        {
          "get!"
          for(let j = 0;j < state.select[state.session].length; j++){
            if(state.ans[state.session][i] == state.items[j])
            {
              console.log("get!")
              userans[i] = state.select[state.session][j]
            }
            if(state.que[state.session][i].ans == state.items[j])
            {
              console.log("let!")
              ansers[i] = state.select[state.session][j]
            }
          }
        }
      }
      getAns()
      state.resultItems[state.session].length = state.select[state.session].length
      for (let i = 0; i < state.select[state.session].length; i++) {
        state.resultItems[state.session][i] = {}
        // console.log(state.resultItems[state.session][i])
        state.resultItems[state.session][i].anser = state.ans[state.session][i]
        state.resultItems[state.session][i].example = state.que[state.session][i].ans
        state.resultItems[state.session][i].que = state.que[state.session][i].que

        state.resultItems[state.session][i].anser_common = userans[i]
        state.resultItems[state.session][i].example_common = ansers[i]

        state.resultItems[state.session][i].name = ("問題 " + (i + 1))
      }
      state.items = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ']

    }
    
    
  })

  
  