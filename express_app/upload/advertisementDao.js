/**
 * Created by gireesh.babu on 16/01/15.
 */

//Query to get image
Client.query('select image from image_table limit 1',
    function(err, readResult) {
        console.log('err',err,'pg readResult',readResult);
        fs.writeFile('/tmp/foo.jpg', readResult.rows[0].image);
        res.json(200, {success: true});
    });
