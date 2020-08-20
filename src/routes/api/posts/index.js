import PostsService from '../../../services/posts_service'
import { sendJSON } from '../../../_utils'

export async function get(req, res) {
  const data = await PostsService.getPosts({ ...req.query })
  sendJSON(res, data)
}
