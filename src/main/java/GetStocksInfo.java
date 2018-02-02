/**
 * Created by pc on 2018/2/1.
 */

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

/**
 * describe:返回当前的股票信息
 *
 * @author xxx
 * @date4 {YEAR}/02/01
 */
public class GetStocksInfo extends HttpServlet {
    //保存股票对象的map
    private HashMap<String,Stock> stocks;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //返回两只股票的价格信息
        //1.计算随机数
        double sz = Math.random()*20;
        double pf = Math.random()*0.5;
        //通过随机数是奇数还是偶数来判断股票是上涨还是下跌
        boolean flagsz = ((int)(Math.random()*10))%2==0;
        boolean flagpf = ((int)(Math.random()*10))%2==0;
        //2.将随机数和股票的当前价格进行加或减得操作，得到新的当前价格
        Stock szzs = stocks.get("300001");
        Stock pfyh = stocks.get("00001");
        double temp;
        if(flagsz){
            temp = szzs.getNow()+sz;
        }else{
            temp = pfyh.getNow()-sz;
        }
        //需要对新的当前价格进行截取，只保留小数点后两位
        temp = (int)(temp*100)/100.0;
        szzs.setNow(temp);
        if(flagpf){
            temp = szzs.getNow()+pf;
        }else{
            temp = pfyh.getNow()-sz;
        }
        temp = (int)(temp*100)/100.0;
        pfyh.setNow(temp);
        resp.setContentType("text/html;charset=gb2312");
        PrintWriter out = resp.getWriter();
        //out.println(szzs.getNow()+"<hr />"+pfyh.getNow());
        //3.返回两只股票昨天收盘，今天开盘和当前价格
        //采用json的数据格式返回股票的信息
        StringBuilder builder = new StringBuilder();
        //采用数组的方式回传两个对象
//        builder.append("[{name:\"").append(szzs.getName()).append("\",id:\"").append(szzs.getId())
//                .append("\",yes:").append(szzs.getYesterday()).append(",tod:").append(szzs.getToday())
//                .append(",now:").append(szzs.getNow())
//                .append("},")
//        .append("{name:\"").append(pfyh.getName()).append("\",id:\"").append(pfyh.getId())
//                .append("\",yes:").append(pfyh.getYesterday()).append(",tod:").append(pfyh.getToday())
//                .append(",now:").append(pfyh.getNow())
//                .append("}]");
//                out.println(builder);
                //采用对象的方式回传两个股票对象
                //如果回传表示对象的json，需要在最外层加上一个括号，否则页面会解析出错
        builder.append("({")
                .append("\"").append(szzs.getId()).append("\":{name:\"").append(szzs.getName())
                .append("\",yes:").append(szzs.getYesterday()).append(",tod:").append(szzs.getToday())
                .append(",now:").append(szzs.getNow())
                .append("},")
                .append("\"").append(pfyh.getId()).append("\":{name:\"").append(pfyh.getName())
                .append("\",yes:").append(pfyh.getYesterday()).append(",tod:").append(pfyh.getToday())
                .append(",now:").append(pfyh.getNow())
                .append("}})");
                out.println(builder);
        }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
    @Override
    public void init(ServletConfig config) throws ServletException {
        stocks = new HashMap<String,Stock>();
        //创建股票
        Stock szzs = new Stock(3000.0,2990.1,"上证指数","300001");
        Stock puty = new Stock(23.22,23.50,"浦发银行","00001");
        //将两只股票保存在stocks的map中
        stocks.put(szzs.getId(),szzs);
        stocks.put(puty.getId(),puty);
        //System.out.println(stocks);
    }
}
