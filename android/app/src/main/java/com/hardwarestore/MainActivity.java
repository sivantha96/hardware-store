package com.hardwarestore;
import expo.modules.ReactActivityDelegateWrapper;
import com.facebook.react.ReactActivityDelegate;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "hardwareStore";
  }

  /**
   * React Navigation dependency
   * to avoid crashes related to View state being not persisted consistently across Activity restarts
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    RNBootSplash.init(MainActivity.this);
    super.onCreate(null);
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this,
      new ReactActivityDelegate(this, getMainComponentName())
    );
  }
}
