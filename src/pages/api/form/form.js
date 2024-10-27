export default function handler(req, res) {
    req.status(200).json({
        text: 'hello'
    })
}