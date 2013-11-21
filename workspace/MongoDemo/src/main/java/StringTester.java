
public class StringTester {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StringBuilder bodyBuilder = new StringBuilder();
        bodyBuilder.append("appended inside main");

        createSuccessTable(bodyBuilder);
        createFailureTable(bodyBuilder);

        int totalBackups = 3 + 4;
        System.out.print(totalBackups);

	}




    public static void createSuccessTable(StringBuilder body) {

        body.append("inside create success table");

    }

    public static void createFailureTable(StringBuilder body) {

        body.append("inside falure table");
        body.append("3");
        body.append("4");


    }



}
