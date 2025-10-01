import './App.css'
import { useMemo } from 'react';
import {MaterialReactTable,useMaterialReactTable,type MRT_ColumnDef} from 'material-react-table';
import 風 from './photo/風.png';
import 小三風 from './photo/小三風.png';
import 大三風 from './photo/大三風.png';
import 小四喜 from './photo/小四喜.png';
import 大四喜 from './photo/大四喜.png';
import 三元 from './photo/三元.png';
import 小三元 from './photo/小三元.png';
import 大三元 from './photo/大三元.png';
import 字一色 from './photo/字一色.png';
import 十三么 from './photo/十三么.png';
import 缺五 from './photo/缺五.png';
import 大雞糊 from './photo/大雞糊.png';
import 清一色 from './photo/清一色.png';
import 五門 from './photo/五門.png';
import 平糊 from './photo/平糊.png';
import 缺一門 from './photo/缺一門.png';
import 混帶么 from './photo/混帶么.png';
import 清么九 from './photo/清么九.png';
import 全帶么 from './photo/全帶么.png';
import 混么 from './photo/混么.png';
import 清龍 from './photo/清龍.png';
import 雜龍 from './photo/雜龍.png';
import 老少碰 from './photo/老少碰.png';
import 老少上 from './photo/老少上.png';
import 十六不搭 from './photo/十六不搭.png';
import 相逢 from './photo/相逢.png';
import 三相逢 from './photo/三相逢.png';
import 四同順 from './photo/四同順.png';
import 五同順 from './photo/五同順.png';
import 四歸一 from './photo/四歸一.png';
import 四歸二 from './photo/四歸二.png';
import 四歸四 from './photo/四歸四.png';
import 對對糊 from './photo/對對糊.png';
import 混一色 from './photo/混一色.png';
import 一色五步高 from './photo/一色五步高.png';
import 三色五步高 from './photo/三色五步高.png';
import 姊妹 from './photo/姊妹.png';
import 三姊妹  from './photo/三姊妹.png';
import 四姊妹 from './photo/四姊妹.png';
import 五姊妹 from './photo/五姊妹.png';
import 兄弟 from './photo/兄弟.png';
import 三兄弟 from './photo/三兄弟.png';
import 全帶X from './photo/全帶X.png';
import 三色三步高 from './photo/三色三步高.png';
import 般高 from './photo/般高.png';
import 雙般高 from './photo/雙般高.png';
import 三般高 from './photo/三般高.png';


type Person = {
  name: string;
  address: string;
  city: string;
};

const data: Person[] = [
  {
    name: '花',
    address: '1',
    city: '每隻計算',
  },  
  {
    name: '無花',
    address: '1',
    city: '沒有花牌',
  },
  {
    name: '正花',
    address: '2',
    city: '依風位每隻計算',
  },
  {
    name: '一台草',
    address: '收每門0.5底',
    city: '集齊「春 或 梅」、「夏 或 蘭」、「秋 或 菊」、「冬 或 竹」各組其一。',
  },
  {
    name: '一台花',
    address: '收每門1底',
    city: '集齊「春夏秋冬」系列 或 「梅蘭菊竹」系列',
  },
  {
    name: '花胡(八仙過海)',
    address: '80',
    city: '須即時胡牌，放棄花胡後只能按花位計算番數',
  },
  {
    name: '七搶一',
    address: '30',
    city: '須即時胡牌，放棄七搶一後只能按花位計算番數',
     
  },
  {
    name: '一搶七',
    address: '30',
    city: '須即時胡牌',
     
  },
  {
    name: '無字花',
    address: '5',
    city: '沒有番子牌及花牌',
     
  },
  {
    name: '無字',
    address: '1',
    city: '沒有番子牌',
     
  },
  {
    name: '風牌',
    address: '1',
    city: 風,
     
  },
  {
    name: '正風圈',
    address: '2',
    city: '與當前風圈吻合',
     
  },
  {
    name: '正風位',
    address: '2',
    city: '與當前風位吻合',
     
  },
  {
    name: '正風圈風位',
    address: '3',
    city: '與當前風位及圈位同時吻合',
     
  },
  {
    name: '三元牌',
    address: '2',
    city: 三元,
     
  },
  {
    name: '假獨',
    address: '1',
    city: '',
     
  },
  {
    name: '獨獨',
    address: '2',
    city: '',
     
  },
  {
    name: '對碰',
    address: '2',
    city: '',
     
  },
  {
    name: '將眼',
    address: '2',
    city: '',
     
  },
  {
    name: '明槓',
    address: '1',
    city: '',
     
  },
  {
    name: '暗槓',
    address: '2',
    city: '',
     
  },
  {
    name: '自摸',
    address: '1',
    city: '',
     
  },
  {
    name: '門前清',
    address: '5',
    city: '沒有上牌或碰牌，槓牌仍當作門清計算',
     
  },
  {
    name: '門前清自摸',
    address: '8',
    city: '',
     
  },
  {
    name: '門前清聽牌',
    address: '15',
    city: '',
     
  },
  {
    name: '門前清聽牌自摸',
    address: '20',
    city: '',
     
  },
  {
    name: '聽牌',
    address: '5',
    city: '聽牌(叮)後不可轉章及槓牌',
     
  },
  {
    name: '一發',
    address: '5',
    city: '在聽牌(叮)後一巡內食胡 (該巡內不得碰槓牌及上牌)',
     
  },
  {
    name: '燕返',
    address: '5',
    city: '',
     
  },
  {
    name: '缺五',
    address: '10',
    city: 缺五,
     
  },
  {
    name: '斷么九',
    address: '5',
    city: '沒有一、九及字牌',
     
  },
  {
    name: '缺一門',
    address: '5',
    city: 缺一門,
     
  },
  {
    name: '搶槓',
    address: '5',
    city: '叫胡者可以搶加槓者牌胡牌 (當作加槓者出銃) ',
     
  },
  {
    name: '槓摸',
    address: '5',
    city: '自摸 1 番 加 槓摸 4 番',
     
  },
  {
    name: '槓上槓摸',
    address: '30',
    city: '自摸 1 番 加 槓摸 4 番 加 槓上槓摸 25 番',
     
  },
  {
    name: '花摸',
    address: '2',
    city: '自摸 1 番 加 花摸 1 番',
     
  },
  {
    name: '混花槓摸',
    address: '10/20/40/70/110/160/220/300',
    city: '',
     
  },
  {
    name: '四缺',
    address: '80',
    city: '斷么九、缺五，缺一門、無字花',
     
  },
  {
    name: '海底撈月',
    address: '20',
    city: '自摸最後一隻牌章食胡',
     
  },
  {
    name: '河底撈魚',
    address: '10',
    city: '最後一巡',
     
  },
  {
    name: '一炮雙響',
    address: '5',
    city: '兩家同時胡牌，每家額外加 5 番',
     
  },
  {
    name: '一炮三響',
    address: '10',
    city: '三家同時胡牌，每家額外加 10 番',
     
  },
  {
    name: '四絕',
    address: '5',
    city: '',
     
  },
  {
    name: '八絕',
    address: '20',
    city: '',
     
  },
  {
    name: '十二絕',
    address: '80',
    city: '',
     
  },
  {
    name: '四只內',
    address: '40',
    city: '由莊家第一隻牌打出計至第四隻內食胡 (碰槓牌及上牌不計算在內)',
     
  },
  {
    name: '七只內',
    address: '20',
    city: '由莊家第一隻牌打出計至第七隻內食胡 (碰槓牌及上牌不計算在內)',
     
  },
  {
    name: '十只內',
    address: '10',
    city: '由莊家第一隻牌打出計至第十隻內食胡 (碰槓牌及上牌不計算在內)',
     
  },
  {
    name: '天聽',
    address: '50',
    city: '閒家在牌局摸第一隻牌前聽牌(叮)  *須於摸第一隻牌前知會其他玩家',
     
  },
  {
    name: '地聽',
    address: '25',
    city: '在聽牌(叮)後一巡內食胡 (該巡內不得碰槓牌及上牌)',
     
  },
  {
    name: '天糊',
    address: '100',
    city: '莊家開始牌局即時食胡 (補花後亦計算，槓牌後不計算)',
     
  },
  {
    name: '地糊',
    address: '90',
    city: '所有玩家第一巡下閒家自摸/食莊第一隻打出',
     
  },
  {
    name: '人糊',
    address: '110/55',
    city: '由牌局第一巡內食胡 (除第一隻，碰槓上牌須計算在內，未有碰上槓可另計算一發)',
     
  },
  {
    name: '四歸一',
    address: '5',
    city: 四歸一,
     
  },
  {
    name: '四歸二',
    address: '15',
    city: 四歸二,
     
  },
  {
    name: '四歸四',
    address: '40',
    city: 四歸四,
     
  },
  {
    name: '雜龍',
    address: '8(15)',
    city: 雜龍,
     
  },
  {
    name: '清龍',
    address: '10(20)',
    city: 清龍,
     
  },
  {
    name: '小於五',
    address: '50',
    city: '',
     
  },
  {
    name: '大於五',
    address: '50',
    city: '',
     
  },
  {
    name: '滿庭芳(全帶X)',
    address: '50',
    city: 全帶X,
     
  },
  {
    name: '全帶一/九',
    address: '150',
    city: '',
     
  },
  {
    name: '混帶X',
    address: '25/30/35',
    city: '混帶X非番子必須至少5隻',
     
  },
  {
    name: '混帶一/九',
    address: '35',
    city: '',
     
  },
  {
    name: '混帶一二三/七八九',
    address: '50',
    city: '',
     
  },
  {
    name: '平糊',
    address: '5',
    city: 平糊,
     
  },
  {
    name: '大平糊',
    address: '15',
    city: '無字花',
     
  },
  {
    name: '一步登天',
    address: '20(40)',
    city: '',
     
  },
  {
    name: '般高',
    address: '5(10)',
    city: 般高,
     
  },
  {
    name: '雙般高',
    address: '20/30/40',
    city: 雙般高,
     
  },
  {
    name: '三般高',
    address: '15',
    city: 三般高,
     
  },
  {
    name: '四般高',
    address: '45',
    city: '*若全般高出現，計全姊妹及雙般高後覆計三般高',
     
  },
  {
    name: '相逢',
    address: '2',
    city: 相逢,
     
  },
  {
    name: '三相逢',
    address: '10(20)',
    city: 三相逢,
     
  },
  {
    name: 'V',
    address: '5(10)',
    city: '',
     
  },
  {
    name: '三色三步高',
    address: '5(10)',
    city: 三色三步高,
     
  },
  {
    name: '三色四步高',
    address: '15(30)',
    city: '',
     
  },
  {
    name: '三色五步高',
    address: '30(60)',
    city: 三色五步高,
     
  },
  {
    name: '一色三步高',
    address: '10(20)',
    city: '',
     
  },
  {
    name: '一色四步高',
    address: '30(60)',
    city: '',
     
  },
  {
    name: '一色五步高',
    address: '60(120)',
    city: 一色五步高,
     
  },
  {
    name: '全姊妹',
    address: '20(40)',
    city: '必定為兩相逢/般高及三相逢/般高組合',
     
  },
  {
    name: '四同順',
    address: '10(20)',
    city: 四同順,
     
  },
  {
    name: '五同順',
    address: '+20(40)',
    city: 五同順,
     
  },
  {
    name: '兄弟',
    address: '5',
    city: 兄弟,
     
  },
  {
    name: '三兄弟',
    address: '10(20)',
    city: 三兄弟,
     
  },
  {
    name: '姊妹',
    address: '5',
    city: 姊妹,
     
  },
  {
    name: '三姊妹',
    address: '10(20)',
    city: 三姊妹,
     
  },
  {
    name: '四姊妹',
    address: '25(40)',
    city: 四姊妹,
     
  },
  {
    name: '五姊妹',
    address: '60(110)',
    city: 五姊妹,
     
  },
  {
    name: '六姊妹',
    address: '300',
    city: '',
     
  },
  {
    name: '二暗坎',
    address: '5',
    city: '暗手牌持兩對刻子，明暗槓計算在內。',
     
  },
  {
    name: '三暗坎',
    address: '15',
    city: '暗手牌持三對刻子，明暗槓計算在內。',
     
  },
  {
    name: '四暗坎',
    address: '45',
    city: '暗手牌持四對刻子，明暗槓計算在內。',
     
  },
  {
    name: '五暗坎',
    address: '90',
    city: '暗手牌持五對刻子，明暗槓計算在內。',
     
  },
  {
    name: '三色連碰',
    address: '8(15)',
    city: '',
     
  },
  {
    name: '小大五門',
    address: '10(15)',
    city: 五門,
     
  },
  {
    name: '小大七門',
    address: '15(20)',
    city: '*一門多餘的做眼便是大的x門齊',
     
  },
  {
    name: '大雞糊',
    address: '30',
    city: 大雞糊,
     
  },
  {
    name: '正宗大雞糊',
    address: '40',
    city: '',
     
  },
  {
    name: '鴨糊',
    address: '15',
    city: '大雞胡的牌型下自摸胡牌。',
     
  },
  {
    name: '正宗鴨糊',
    address: '20',
    city: '一隻爛花=正宗',
     
  },
  {
    name: '雙槓',
    address: '10',
    city: '',
     
  },
  {
    name: '三槓',
    address: '20',
    city: '',
     
  },
  {
    name: '四槓',
    address: '40',
    city: '',
     
  },
  {
    name: '對對糊',
    address: '30',
    city: 對對糊,
     
  },
  {
    name: '坎坎糊',
    address: '100',
    city: '暗手牌持五對刻子並且自摸。 (不可明暗槓；門清對對糊)',
     
  },
  {
    name: '廿二羅漢',
    address: '300',
    city: '',
     
  },
  {
    name: '半求人',
    address: '15',
    city: '十五章落地，單吊自摸食胡；不可以暗槓',
     
  },
  {
    name: '全求人',
    address: '30',
    city: '十五章落地，打出食胡；不可以暗槓',
     
  },
  {
    name: '混一色',
    address: '40',
    city: 混一色,
     
  },
  {
    name: '清一色',
    address: '90',
    city: 清一色,
     
  },
  {
    name: '字一色',
    address: '200',
    city: 字一色,
     
  },
  {
    name: '小三元',
    address: '25',
    city: 小三元,
     
  },
  {
    name: '大三元',
    address: '50',
    city: 大三元,
     
  },
  {
    name: '小三風',
    address: '20',
    city: 小三風,
     
  },
  {
    name: '大三風',
    address: '40',
    city: 大三風,
     
  },
  {
    name: '小四喜',
    address: '60',
    city: 小四喜,
     
  },
  {
    name: '大四喜',
    address: '120',
    city: 大四喜,
     
  },
  {
    name: '十三么',
    address: '100(120)',
    city: 十三么,
     
  },
  {
    name: '十六不搭',
    address: '50',
    city: 十六不搭,
     
  },
  {
    name: '三不搭或雜龍',
    address: '+10/20',
    city: '',
     
  },
  {
    name: '三不搭頭尾都是一九',
    address: '+15',
    city: '',
     
  },
  {
    name: '老少上',
    address: '3',
    city: 老少上,
     
  },
  {
    name: '老少碰',
    address: '5',
    city: 老少碰,
     
  },
  {
    name: '混帶么',
    address: '25',
    city: 混帶么,
     
  },
  {
    name: '全帶么',
    address: '50',
    city: 全帶么,
     
  },
  {
    name: '混么',
    address: '80',
    city: 混么,
     
  },
  {
    name: '清么九',
    address: '300',
    city: 清么九,
     
  },
  {
    name: '嚦咕嚦咕',
    address: '50',
    city: '8飛 60 (可計五門10/七門齊20) 一色連對(3連刻起)5/10/20/40/80 三元15 三風10 四喜30 *嚦咕將眼只計一對',
     
  },
  {
    name: '通天雜龍',
    address: '100',
    city: '兩門的老少+剩餘一門的456',
     
  },
  {
    name: '通天清龍',
    address: '300',
    city: '不計清一色 (例子:123123 456 789789 00)',
     
  },
  {
    name: '蛇骰(1,2,3)',
    address: '賠每門1底',
    city: '換牌最少2次 上限4次',
     
  },
  {
    name: '圍骰',
    address: '每門1底',
    city: '圍骰 (莊家收)',
     
  },
  {
    name: '詐糊',
    address: '賠每家6底',
    city: '',
     
  }
];

const App = () => {
const columns = useMemo<MRT_ColumnDef<Person>[]>(
  () => [
    {
      accessorKey: 'name',
      header: '牌型',
      size: 10,
    },
    {
      accessorKey: 'address',
      header: '番(暗)',
      size: 10,
    },
    {
  accessorKey: 'city',
  header: '說明',
  size: 400, // Make this column wider
  Cell: ({ cell }) => {
    const value = cell.getValue<string>();
    const isImage = value && /\.(png|jpg|jpeg|gif|svg)$/.test(value);
    if (isImage) {
      return (
        <img
          src={value}
          alt="example"
          style={{ width: '100%', maxWidth: '650px', height: '40px' }}
        />
      );
    }
    return <span style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{value || ''}</span>;
  },
},
  ],
  [],
);

  const table = useMaterialReactTable({
    columns,
    data,
    enableSorting: false,
    enablePagination: false,
    enableColumnFilters: false,
    enableColumnActions: false,
    enableHiding: false,

    initialState: { density: 'compact' },
    enableDensityToggle: false,
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        fontSize: '1.2rem',
        padding: '0px 8px',      // Reduce vertical and horizontal padding
        minHeight: '24px',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        fontStyle: 'italic',
        fontWeight: 'normal',
        fontSize: '1.2rem',
        padding: '4px 8px',      // Reduce header cell padding
        minHeight: '24px',       // Set minimum height for header cells
      },
    },
     //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <div style={{ width: '100%', overflowX: 'auto', padding: '16px', boxSizing: 'border-box' }}>
      <h2 style={{ margin: '16px 0', textAlign: 'center', color: '#000000ff'  }}>麻雀牌型列表</h2>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default App;
