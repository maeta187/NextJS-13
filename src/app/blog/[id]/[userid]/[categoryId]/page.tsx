/**
 * paramsを受け取るディレクトリの下にさらparamsを受け取るディレクトリを作成することができる
 * その際のデータ型は以下のようになる
 * id: string[] or id: string; userId: string; categoryId: string
 * ディレクトリ名が重複するとエラーになる
 */

const Page = ({
  params
}: {
  params: { id: string; userId: string; categoryId: string }
}) => {
  console.log(params)
  return <div>Blog ID: </div>
}

export default Page
