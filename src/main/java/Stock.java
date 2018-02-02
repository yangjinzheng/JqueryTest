/**
 * Created by pc on 2018/2/1.
 */

/**
 * describe:用于保存股票的基本信息
 *
 * @author xxx
 * @date4 {YEAR}/02/01
 */
public class Stock {
    /**
     * 昨天的收盘价
     * */
    private double yesterday;
    /**
     * 今天的开盘价
     * */
    private double today;
    /**
     * 当前价
     * */
    private double now;
    /**
     * 股票名称
     * */
    private String name;
    /**
     * 股票代码
     * */
    private String id;

    public Stock(double yesterday, double today, String name, String id) {
        this.yesterday = yesterday;
        this.today = today;
        this.name = name;
        this.id = id;
        this.now = today;
    }

    public double getYesterday() {
        return yesterday;
    }

    public void setYesterday(double yesterday) {
        this.yesterday = yesterday;
    }

    public double getToday() {
        return today;
    }

    public void setToday(double today) {
        this.today = today;
    }

    public double getNow() {
        return now;
    }

    public void setNow(double now) {
        this.now = now;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
