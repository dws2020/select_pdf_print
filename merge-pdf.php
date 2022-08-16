<?php
$json = $_POST['a'];
// $json = file_get_contents('php://input'); // var_dump($json);
// JSON文字列をobjectに変換 ⇒ 第2引数をtrueにしないとハマるので注意
$data = json_decode($json, true, 512, JSON_OBJECT_AS_ARRAY);
$files = array_values($data);

use setasign\Fpdi;
 
require_once( './TCPDF/tcpdf.php' );
require_once( './FPDI/src/autoload.php' );
 
// $files = array(
//     './files/pdf1.pdf',
//     './files/pdf2.pdf',
//     './files/pdf3.pdf',
//     './files/pdf4.pdf',
// );
 
$pdf = new Fpdi\TcpdfFpdi();
 
$pdf->setPrintHeader( false );
$pdf->setPrintFooter( false );
 
foreach( $files as $file ) {
    $count = $pdf->setSourceFile( $file );
    for ( $i = 1; $i <= $count; $i++ ) {
        $pdf->addPage();
        $pdf->useTemplate( $pdf->importPage( $i ) );
    }
}
 
$pdf->output();
 
exit();

?>