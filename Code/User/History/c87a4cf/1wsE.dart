import 'package:flutter/material.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp(
    child: MaterialApp(
      title: 'Bus Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: Scaffold(
          appBar: AppBar(
        title: const Text(
          "Hello Diver",
          style: TextStyle(backgroundColor: Colors.amber),
        ),
      )),
      debugShowCheckedModeBanner: false,
    ),
  ));
}

class MyApp extends StatefulWidget {
  final Widget child;
  const MyApp({this.child});

  static void restartApp(BuildContext context) {
    context.findRootAncestorStateOfType<_MyAppState>().restartApp();
  }

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Key key = UniqueKey();
  void restartApp() {
    setState(() {
      key = UniqueKey();
    });
  }

  @override
  Widget build(BuildContext context) {
    return KeyedSubtree(
      child: widget.child,
      key: key,
    );
  }
}
