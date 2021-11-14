import time
from threading import Thread
from selenium import webdriver


caps=[{
      'os_version': '10',
      'os': 'Windows',
      'browser': 'chrome',
      'browser_version': '91.0',
      'name': 'Parallel Test1', 
      'build': 'browserstack-build-1' 
      },
      {
      'os_version': '10',
      'os': 'Windows',
      'browser': 'firefox',
      'browser_version': '81.0',
      'name': 'Parallel Test2',
      'build': 'browserstack-build-1'
    }]	 

def run_session(desired_cap):
  driver = webdriver.Remote(command_executor='https://lasa_Av6qgI:gRe8qF5mfT1ej92Gw8vu@hub-cloud.browserstack.com/wd/hub', desired_capabilities=desired_cap)
  driver.get("https://selenium-87556.firebaseapp.com/")
  driver.manage().window().maximize()
  driver.find_element_by_id("login").send_keys("lasa")
  driver.find_element_by_id("password").send_keys("1111")
  time.sleep(1)
  driver.find_element_by_id("log").click()
  time.sleep(2)
  driver.find_element_by_id("salas").click()
  driver.back()
  driver.find_element_by_id("opiniones")
  driver.find_element_by_id("Textarea1")send_keys("gran pelicula")
  driver.find_element_by_id("Input1").send_keys("lasa@gmail.com")
  driver.find_element_by_id("enviaropinion").click()
  driver.back()
  driver.quit()
  

if __name__ == '__main__':
    for cap in caps:
        Thread(target=run_session, args=(cap,)).start()