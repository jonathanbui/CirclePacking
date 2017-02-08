<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CircleCanvas.aspx.cs" Inherits="Bui_Circle_Packing.CircleCanvas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Circle Packing</title>
    <script src="setup.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <body onload="draw();">
        <canvas style="align-content:center; " id="canvas" width="500" height="500"></canvas>
        </body>
  
    </form>
</body>
</html>
