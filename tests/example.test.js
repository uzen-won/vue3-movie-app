import axios from 'axios'
import { fetchMovieTitle } from "./example";

// 비동기 테스트를 할때는 신뢰도를 높이기 위해 모의함수를 사용해서 테스트한다.
describe('비동기 테스트', () => { 
  test('영화 제목 변환', async () => { 
    axios.get = jest.fn(() => { 
      return new Promise(resolve => { 
        resolve({
          data: {
            Title: 'Frozen II'
          }
        })
      })
    })
    const title = await fetchMovieTitle()
    expect(title).toBe('Frozen ii??')
  })
})