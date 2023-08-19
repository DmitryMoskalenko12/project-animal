const resData = [];
console.log(resData)
export async function post(data) {
  const res = resData.push(data);
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(res), 2000)
  } )
}