import 'dart:async';

import 'package:conductor_app/pages/mainScreen/mainscr.dart';
import 'package:flutter/material.dart';

class splash extends StatefulWidget {
  const splash({super.key});

  @override
  State<splash> createState() => _splashState();
}

class _splashState extends State<splash> {
  startTimer() {
    Timer(const Duration(seconds: 3), () async {
      // yaha se dost apna user homme iscreen pr jayega so dekh lo  kasie hoha
      // raat k 3 baj rhe hai and mueh  nahi pta ki mai ki mai kya code kr rha
      // argar koi yeh code padh rha , pleases mujhe ek cup coffee pila do
      Navigator.push(
          context, MaterialPageRoute(builder: (c) => const MainScreen()));
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    startTimer();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black,
      child: const Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          //bheco mai hoo rha aalsi ,
          // Image.asset("path");// isse uncomment kr lena , pubspec.yaml mai jaa k assets import kr li then
          //assets ek assets wale folder mai rakh di
          // baad ai boluga yaha logo lga do tab lga dena
          Text("Hello"),
        ],
      )),
    );
  }
}
