$page_id = 'YOUR_PAGE_ID';
$access_token = '266721917052754|uRNsz5ehttRbOJ18-TgPN-CC_pY';
//Get the JSON
$json_object = @file_get_contents('https://graph.facebook.com/' . $page_id .
'/posts?access_token=' . $access_token);
//Interpret data
$fbdata = json_decode($json_object);

foreach ($fbdata->data as $post )
{
$posts .= '<p><a href="' . $post->link . '">' . $post->story . '</a></p>';
$posts .= '<p><a href="' . $post->link . '">' . $post->message . '</a></p>';
$posts .= '<p>' . $post->description . '</p>';
$posts .= '<br />';
}
//Display the posts
echo $posts;
