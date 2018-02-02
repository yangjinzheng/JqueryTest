/**
 * Created by pc on 2018/2/1.
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * describe:
 *
 * @author xxx
 * @date4 {YEAR}/02/01
 */
public class AutoCompelete extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       String word = req.getParameter("word");
       //将字符串保存在request对象中
        req.setAttribute("word",word);
        //将请求转发给视图层（注意Ajax中，该视图层不返回页面，只返回数据）
        req.getRequestDispatcher("wordxml.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
